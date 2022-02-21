// import { useState, useEffect } from "react";
import { LinksFunction } from "remix";
import styles from "~/styles/home.css";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

// const initialText = "Accidentally fell in love with javascript.Frontend developer.Based in Ho Chi Minh city."

export default function Index() {
  // const [typedText, setTypedText] = useState("");
  // const [indexText, setIndexText] = useState(0);
  
  // useEffect(() => {
  //   const index = indexText % initialText.length;
  //   if (initialText[index] !== ".") {
  //     setTimeout(() => {
  //       // setTypedText()
  //     })
  //   }
  // }, [typedText]);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="typography text-4xl md:text-7xl">i'm tien dung</h1>
      <div className="flex justify-center items-center">
        <span className="flex text-xs md:text-lg text-gray-500 mt-1">
        <span className="typed-text">Accidentally fell in love with javascript</span>
        <span>|</span>
        </span>
      </div>
    </div>
  );
}
