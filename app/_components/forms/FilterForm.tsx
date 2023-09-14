import React from 'react'

export function FilterForm() {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-2"
        >
            <div><select name="" id=""></select></div>
            <div><select name="" id=""></select></div>
            <div><select name="" id=""></select></div>
            <div><select name="" id=""></select></div>
        </form>
    )
}
