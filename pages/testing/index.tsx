import Testing from "@/components/dashboard";
import { useState, useEffect } from "react";

export default function Farm() {
  const [idk, wth] = useState(100);
  const some = () => {
    wth(idk + 1);
  };
  useEffect(() => {
    let shit = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();
      wth(data.user[0].maxfuel);
    };
    shit();
  }, []);
  useEffect(() => {
    let hmm = setInterval(async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();
      wth(idk + data.user[0].maxfuel);
    }, 1000);
    return () => {
      clearInterval(hmm);
    };
  }, [idk]);

  return <Testing name={idk} clicked={some} />;
}
