import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../Store/ThemeSlice";
import "../../styles/theme-toggle.css";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {theme === 'light' ? (
            <span className="theme-icon">☀️</span>
          ) : (
            <span className="theme-icon">🌙</span>
          )}
        </div>
      </div>
    </button>
  );
}
