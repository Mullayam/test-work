import React, { HtmlHTMLAttributes } from 'react'
import '@/styles/Menubar.module.css'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { BiUndo, BiRedo } from 'react-icons/bi'
import { FiItalic, FiBold } from 'react-icons/fi'
import { GrStrikeThrough } from 'react-icons/gr'
import { MdFormatListBulleted } from 'react-icons/md'
import { VscListOrdered } from 'react-icons/vsc'

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleBold().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`rounded-md p-2 m-1 hover:bg-[#F3F4F6] ${editor.isActive('bold') ? 'is-active' : ''}`}
            >
                <FiBold
                    fontSize={20}
                />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleItalic().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={`rounded-md p-2 m-1 hover:bg-[#F3F4F6] ${editor.isActive('italic') ? 'is-active' : ''}`}
            >
                <FiItalic
                    fontSize={20}
                />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleStrike().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={`rounded-md  p-2 m-1  hover:bg-[#F3F4F6] ${editor.isActive('strike') ? 'is-active' : ''}`}
            >
                <GrStrikeThrough
                    fontSize={20}
                />
            </button>

            <button
                className=" rounded-md  p-2 m-1  hover:bg-[#F3F4F6]"
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().undo().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                <BiUndo
                    fontSize={20}
                />
            </button>
            <button
                className=" rounded-md p-2 m-1 hover:bg-[#F3F4F6]"
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().redo().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                <BiRedo
                    fontSize={20}
                />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleBulletList().run()
                }}
                className={` rounded-md  p-2 m-1  hover:bg-[#F3F4F6] ${editor.isActive('bulletList') ? 'is-active' : ''}`}
            >
                <MdFormatListBulleted
                    fontSize={20}
                />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleOrderedList().run()
                }}
                className={` rounded-md  p-2 m-1  hover:bg-[#F3F4F6] ${editor.isActive('orderedList') ? 'is-active' : ''}`}
            >
                <VscListOrdered
                    fontSize={20}
                />
            </button>
        </>
    )
}

export default function Editor({ placeholder }) {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "overflow-none p-6 leading-5 list-decimal list-disc h-64 border border-emphasis rounded-md scrollbar-none  outline-none text-[0.875rem] font-normal leading-[1.5rem] text-[#1F2937] placeholder-[#9CA3AF] overflow-x-scroll overflow-y-scroll",
            }
        },
        extensions: [
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            /* TextStyle.configure({ types: [ListItem.name] }), */
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc'
                }
            })
        ],
        content: `
    <h1>${placeholder}</h1>
    `
    })
    console.log(editor?.getJSON())
    return (
        <>
            <MenuBar
                editor={editor}
            />
            <EditorContent
                className="p-2 outline-none scrollbar-none overflow-scroll"
                editor={editor}
            />
        </>
    )
}