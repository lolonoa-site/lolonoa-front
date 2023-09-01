"use client";

import Input from "@/app/component/Input";
import { useInput } from "@/app/hooks/useInput";
import React, { forwardRef, useRef } from "react";
import MenuCard from "../component/MenuCard";
import "@mdxeditor/editor/style.css";
import dynamic from "next/dynamic";
import {
  InsertImage,
  MDXEditorMethods,
  MDXEditorProps,
  imagePlugin,
} from "@mdxeditor/editor";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";
import { quotePlugin } from "@mdxeditor/editor/plugins/quote";
import { listsPlugin } from "@mdxeditor/editor/plugins/lists";
import { thematicBreakPlugin } from "@mdxeditor/editor/plugins/thematic-break";

export let DynamicMDXEditor = dynamic(
  // preferred way
  () => import("./component/Editor"),
  // legacy, larger bundle
  // () => import('@mdxeditor/editor').then((mod) => mod.MDXEditor),
  { ssr: false }
);

// eslint-disable-next-line react/display-name
const ForwardedRefMDXEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <DynamicMDXEditor {...props} editorRef={ref} />
);

export default function VarPost() {
  //   const router = useRouter();

  const { value: nameInput, onChange: nameInputOnChange } = useInput("");
  const refs = useRef<MDXEditorMethods>(null);

  return (
    <div className="col-start-1 col-span-4 row-start-4 sm:col-start-2 sm:col-span-6 lg:col-start-5 lg:col-span-6 lg:col-start-4 xl:col-span-4">
      {/* <span>안녕하세요</span> */}
      {/* <MenuCard className="col-start-1 col-span-4 row-start-4 mt-[0.5rem] sm:col-start-3 lg:col-start-5"></MenuCard> */}
      <ForwardedRefMDXEditor
        ref={refs}
        onChange={() => {}}
        markdown=""
        className=" bg-white rounded-[6px]"
        plugins={[
          imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve("https://picsum.photos/200/300");
            },
            imageAutocompleteSuggestions: [
              "https://picsum.photos/200/300",
              "https://picsum.photos/200",
            ],
          }),

          headingsPlugin(),
          quotePlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertImage />
              </>
            ),
          }),
        ]}
      ></ForwardedRefMDXEditor>
    </div>
  );
}
