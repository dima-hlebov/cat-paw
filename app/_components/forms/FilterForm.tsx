"use client"

import React from 'react'
import { Select } from '@components/inputs'
import IconWrapper, { UpdateIcon, UploadIcon } from '@components/icons'
import Button from '@components/buttons'

export function FilterForm() {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-2 gap-x-lg gap-y-sm"
        >
            <div><Select name='Order' options={["Random"]} /></div>
            <div><Select name='Type' options={["Static"]} /></div>
            <div><Select name='Breed' options={["None"]} /></div>
            <div>
                <Select name='Limit' options={["Limit"]}>
                    <Button size={"sm"}>
                        <IconWrapper Icon={UpdateIcon}></IconWrapper>
                    </Button>
                </Select>
            </div>
        </form>
    )
}
