const SAVE_FIELDS = {
  cart: JSON.parse(localStorage.getItem("cart")) || { Items: [], totalQuantity: 0 },
  theme: localStorage.getItem("theme") || "light",
};

function applyTheme(mode) {
  if (mode === "dark") {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
}

export function setupStoreSubscriber(store) {
  let prevCart = SAVE_FIELDS.cart;
  let prevTheme = SAVE_FIELDS.theme;

  applyTheme(prevTheme);

  store.subscribe(() => {
    const state = store.getState();

    if (state.cart !== prevCart) {
      prevCart = state.cart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }

    if (state.theme?.mode !== prevTheme) {
      prevTheme = state.theme.mode;
      localStorage.setItem("theme", prevTheme);
      applyTheme(prevTheme);
    }
  });
}
