interface SwitchComponentsProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SwitchComponents:React.FC<SwitchComponentsProps>  = ({label,checked,onChange})=>{
    return(
      <div className="items-center mb-3 grid grid-flow-col grid-cols-2 justify-stretch dark:bg-[#25193D]">
      <p className="flex justify-self-start text-sm font-medium text-gray-900 dark:text-gray-300">{label}</p>
    <label className='justify-self-end flex items-center me-5 cursor-pointer'>
        <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-500 "></div>
    </label></div>
    
    )
}
export default SwitchComponents;
