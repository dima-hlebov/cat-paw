type SwitchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    isChecked?: boolean
}

export function Switch({ onChange, isChecked }: SwitchProps) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input onChange={onChange} type="checkbox" value="" className="sr-only peer" checked={isChecked} aria-label="Switch" />
            <div className="w-11 h-6 bg-white peer-focus:outline-auto peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-[4px] after:left-[6px] after:bg-primary after:border-primary after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary/20"></div>
        </label>
    )
}
