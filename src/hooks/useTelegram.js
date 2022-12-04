import { useEffect } from "react";
const tg = window.Telegram.WebApp;
export function useTelegram() {
  useEffect(() => {
    tg.ready();
  }, []);
}
