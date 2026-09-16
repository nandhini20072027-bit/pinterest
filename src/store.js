// src/store.js
// Centralised in‑memory store with optional localStorage persistence

export const store = {
  pins: [], // filled from mock data on app start
  saved: [], // array of pin IDs the user saved
  liked: [], // array of pin IDs the user liked
  remixBoard: [], // pins added to the Remix canvas
  journey: {
    trail: [], // sequence of pin IDs representing the inspiration trail
    evolution: [], // pins in the evolution pipeline
    capsules: [], // saved future‑vision capsules
  },
  profile: {
    username: "CreatorName",
    avatar: "https://picsum.photos/seed/avatar/100",
    bio: "Futuristic visual creator exploring the boundaries of design.",
    stats: {
      pins: 0,
      boards: 0,
      saved: 0,
      followers: 0,
    },
  },
};

// Helper to load/store persisted data (used on app init)
export const loadPersistedState = () => {
  try {
    const persisted = JSON.parse(localStorage.getItem("pinterest_state"));
    if (persisted) {
      Object.assign(store, persisted);
    }
  } catch (e) {
    console.warn("Failed to load persisted state", e);
  }
};

export const savePersistedState = () => {
  try {
    localStorage.setItem("pinterest_state", JSON.stringify(store));
  } catch (e) {
    console.warn("Failed to save persisted state", e);
  }
};
