import dynamic from "next/dynamic";

// このタグで囲むことでIgnite UI for Reactのコントロールそれぞれでdynamic importを書かなくてよい
export const IgniteWrapper = dynamic(() => import("./CSRInner"), {
  ssr: false,
});
