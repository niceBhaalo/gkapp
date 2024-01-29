export function storeAchievementInStorage(key) {
    localStorage.setItem(key, "1");
}

export function isAchievementComplete(key) {
    const value = localStorage.getItem(key);
    if (value === "1") {
      return true;
    } else {
      return false;
    }
}
