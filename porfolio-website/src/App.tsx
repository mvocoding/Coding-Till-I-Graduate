import { useEffect } from 'react'
import Sidebar from './Sidebar'
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from './ThemeContext';
import { useModal } from './ModalContext';
import { modalsList } from './data';



function App() {
  const { currentModal } = useModal();
  const { theme } = useTheme();

    useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);
  return (
    <div className={`
      grid max-sm:grid-rows-[10%_1fr] max-sm:[grid-template-areas:'icons'_'modal']
      sm:grid-cols-[10%_1fr_10%] sm:[grid-template-areas:'icons_modal_settings']
      relative
      !text-lg w-full min-h-screen
      `}>
      <Sidebar className={`[grid-area:icons]`}>
      </Sidebar>

      {currentModal && (modalsList[currentModal].component)}
      
      <ThemeSwitcher className={`max-sm:hidden [grid-area:settings]`} />
    </div>
  )
}

export default App
