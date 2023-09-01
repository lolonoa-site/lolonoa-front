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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelect } from "@/app/hooks/useSelect";
import Link from "next/link";

const DynamicMDXEditor = dynamic(
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

  const { value: categoryInput, onChange: categoryOnChange } = useSelect("");
  const { value: titleInput, onChange: titleOnChange } = useInput("");

  const refs = useRef<MDXEditorMethods>(null);

  return (
    <div className="flex flex-col items-start col-start-1 col-span-4 row-start-4 sm:col-start-2 sm:col-span-6 lg:col-start-5 lg:col-span-6 lg:col-start-4 xl:col-span-4 bg-[#f8f9fa] text-[13px] p-[16px] rounded-[6px]">
      <span className="text-black text-[14px] font-bold">글 쓰기</span>

      {/* <MenuCard className="col-start-1 col-span-4 row-start-4 mt-[0.5rem] sm:col-start-3 lg:col-start-5"></MenuCard> */}
      <select
        value={categoryInput}
        required
        name="category"
        onChange={categoryOnChange}
        className="text-black bg-[#f8f9fa] py-[8px] px-[12px] border rounded-[4px] mt-[1rem] outline-none appearance-none bg-[url('/icon/expand-arrow.png')] bg-no-repeat bg-[length:14px] bg-[center_right_9%] pr-[28px]"
      >
        <option value="" disabled hidden>
          카테고리
        </option>
        <option value="1vs1">1 vs 1</option>
        <option value="feedback">피드백</option>
      </select>
      <input
        type="text"
        className="text-black bg-[#f8f9fa] py-[8px] px-[12px] border rounded-[4px] mt-[1rem] w-full appearance-none outline-none"
        placeholder="제목"
        value={titleInput}
        onChange={titleOnChange}
      />
      <ForwardedRefMDXEditor
        ref={refs}
        onChange={() => {}}
        markdown=""
        placeholder="당시 상황, 논점, 각자의 의견 등을 작성해주세요"
        className="mt-[1rem] w-full pb-[5rem]"
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
      <div className="grid grid-cols-2 auto-rows-auto gap-x-[20px] w-[50%] self-end">
        <Link
          className="mt-[20px] row-start-2 col-start-1 col-span-1 py-[10px] text-[12px] rounded-[6px] bg-transparent border border-gray-900 text-gray-900 outline-0 appearance-none flex justify-center items-center"
          href={"/var"}
        >
          취소
        </Link>
        <button
          onClick={() => {}}
          className="mt-[20px] row-start-2 col-start-2 col-span-1 py-[10px] text-[12px] rounded-[6px] bg-teal text-white outline-0 appearance-none"
        >
          글 쓰기
        </button>
      </div>
    </div>
  );
}
