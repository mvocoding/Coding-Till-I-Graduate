import threading
import json
from appium import webdriver
import time
from appium.options.common import AppiumOptions
from appium.webdriver.common.appiumby import AppiumBy
import requests
from datetime import datetime


botToken = "6855255340:AAEnW091RC_B1vVPPKmaSRIK3wicRBDy7aY"
chatId = "-1002037251044"
    
def sendTelegram(msg_body):
    global botToken, chatId

    try:
        base_url = 'https://api.telegram.org/bot' + botToken + '/sendMessage'
        parameters = {
            'chat_id' : chatId,
            'text' : msg_body
        }
        resp = requests.get(base_url, data = parameters)

    except Exception as e:
        print(account['username'] + ' Send Message Failed...Retrying\n')
        sendTelegram(msg_body)
        



with open('config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)

date_list = config["date_list"]
location = config["location"]

location_conditions = " or ".join([f'contains(translate(@text, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "{suburb}")' for suburb in location])
location_query = f"""//androidx.recyclerview.widget.RecyclerView[@resource-id="com.entire.entirehrstaffing:id/rvReleaseShiftDetails"]/android.widget.FrameLayout/android.widget.RelativeLayout[descendant::android.widget.TextView[{location_conditions}]]"""
    
    
date_conditions = " or ".join([f'contains(@text, "{date}")' for date in date_list])
date_query = f"""//android.widget.RelativeLayout[@resource-id='com.entire.entirehrstaffing:id/row_layout'][descendant::android.widget.TextView[{date_conditions}]]//android.widget.TextView[@resource-id='com.entire.entirehrstaffing:id/right_Arrow']"""

time_query = f"""//android.widget.TextView[@resource-id="com.entire.entirehrstaffing:id/shift_time_value"]"""
acceptshift_query = f"""//android.widget.LinearLayout[@resource-id="com.entire.entirehrstaffing:id/accept"]"""
okshift_query = f"""//android.widget.Button[@resource-id="com.entire.entirehrstaffing:id/btnOkk"]"""


time_start = datetime.strptime("06:00", "%H:%M")
maxtime_start = datetime.strptime("20:00", "%H:%M")
min_hour = 6

url = 'http://localhost:4724'


# Function to run the Appium script on a device
def run_appium_script(device_config):
    url = device_config["url"]
    desired_cap = device_config["desired_cap"]

    driver = webdriver.Remote(url, options=AppiumOptions().load_capabilities(desired_cap))
    time.sleep(1)  # Adjust as necessary depending on how long the call takes to initiate

    running = True

    while running:
        try:
            element = driver.find_element(by=AppiumBy.XPATH, value='//android.widget.TextView[@resource-id="com.entire.entirehrstaffing:id/refresh_button"]')
            time.sleep(1)
            element.click()
            
            elements = driver.find_elements(by=AppiumBy.XPATH, value=date_query)
            for element in elements:
                element.click()
                
                shiftdetails_elements = driver.find_elements(by=AppiumBy.XPATH, value=location_query)
                for shiftdetail_el in shiftdetails_elements:
                    shift_time_element = shiftdetail_el.find_element(by=AppiumBy.XPATH, value=time_query)
                    shift_time = shift_time_element.text.split(' to ')
                    start_datetime = datetime.strptime(shift_time[0], "%H:%M")
                    end_datetime = datetime.strptime(shift_time[1], "%H:%M")

                    if end_datetime < start_datetime:
                        end_datetime += timedelta(days=1)

                    duration_seconds = (end_datetime - start_datetime).total_seconds()
                    if start_datetime >= time_start and start_datetime <= maxtime_start and duration_seconds >= min_hour * 3600:
                        acceptshift_element = shiftdetail_el.find_element(by=AppiumBy.XPATH, value=acceptshift_query)
                        acceptshift_element.click()
                        okshift_element = driver.find_element(by=AppiumBy.XPATH, value=okshift_query)
                        okshift_element.click()
                        
                        running = False
            
                if not running:
                    with open('page_source.html', 'w', encoding='utf-8') as f:
                        f.write(driver.page_source)
                    
                    sendTelegram("ĐĂNG KÍ SHIFT THÀNH CÔNG, MÁ GIANG VÔ APP KIỂM TRA NHA !!!")
                    break
                
                else:
                    element = driver.find_element(by=AppiumBy.XPATH, value="//android.widget.RelativeLayout[@resource-id='com.entire.entirehrstaffing:id/left_side_navigation']")
                    element.click()
                
                    
        except Exception as e:
            try:
                try:
                    element = driver.find_element(by=AppiumBy.XPATH, value="//android.widget.TextView[@resource-id='com.entire.entirehrstaffing:id/refresh_button']")
                except Exception as e:
                    try:
                        element = driver.find_element(by=AppiumBy.XPATH, value="//android.widget.RelativeLayout[@resource-id='com.entire.entirehrstaffing:id/left_side_navigation']")
                    except:
                        try:
                            element = driver.find_element(by=AppiumBy.XPATH, value="//android.widget.Button[@resource-id='android:id/button1' and @text='OK']")
                        except:
                            element = None

                if element:
                    element.click()
                    
            except Exception as e:
                continue

    driver.quit()


# Device configurations
device_configs = [
    {
        "url": "http://localhost:4723",
        "desired_cap": {
            "platformName": "Android",
            "appium:platformVersion": "15.0",
            "appium:deviceName": "emulator-5554",
            "appium:udid": "emulator-5554",
            "appium:App": "C:\\\\test.apk",
            "appium:automationName": "UiAutomator2",
            "appium:ensureWebviewsHavePages": "true"
        }
    },
    {
        "url": "http://localhost:4724",
        "desired_cap": {
            "platformName": "Android",
            "appium:platformVersion": "15.0",
            "appium:deviceName": "emulator-5556",
            "appium:udid": "emulator-5556",
            "appium:App": "C:\\\\test.apk",
            "appium:automationName": "UiAutomator2",
            "appium:ensureWebviewsHavePages": "true"
        }
    },
        {
        "url": "http://localhost:4725",
        "desired_cap": {
            "platformName": "Android",
            "appium:platformVersion": "15.0",
            "appium:deviceName": "emulator-5558",
            "appium:udid": "emulator-5558",
            "appium:App": "C:\\\\test.apk",
            "appium:automationName": "UiAutomator2",
            "appium:ensureWebviewsHavePages": "true"
        }
    }
]

# List to hold threads
threads = []

# Create and start a thread for each device
for config in device_configs:
    thread = threading.Thread(target=run_appium_script, args=(config,))
    thread.start()
    threads.append(thread)

# Wait for all threads to complete
for thread in threads:
    thread.join()

print("All tests completed.")