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
      relative
      flex items-center justify-center 
      !text-lg w-full min-h-screen
      `}>
      <Sidebar className={`absolute left-0 top-0`}>
      </Sidebar>

      {currentModal && (modalsList[currentModal].component)}
      
      <ThemeSwitcher className={`absolute top-2 right-2`} />
    </div>
  )
}

export default App
