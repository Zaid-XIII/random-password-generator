import './App.css'
import { useState } from 'react';
import {
  Button,
  Label,
  RangeSlider,
  TextInput,
  Card
} from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { PasswordGen } from './utils';
import SwitchComponents from './toggleswitch';

"use client";

function App() {
  const [lowerCaseSwitch, setLowerCaseSwitch] = useState(true);
  const [upperCaseSwitch, setUpperCaseSwitch] = useState(false);
  const [numberSwitch, setNumberSwitch] = useState(true);
  const [specialSwitch, setSpecialSwitch] = useState(true);
  const [rangeSliderValue, setRangeSliderValue] = useState(8);

  const [password, setPassword] = useState<string>('');

  const generatePassword = () => {
    const newPassword = PasswordGen(rangeSliderValue,lowerCaseSwitch,upperCaseSwitch,numberSwitch,specialSwitch); // Example with password length of 12
    setPassword(newPassword);
  };
  return (
<div className="flex justify-center items-center h-screen">
      <Card className="max-w-sm  dark:text-white dark:bg-slate-600">
      <h5 className="text-2xl font-bold tracking-tight">
        Random Password Generator      
        </h5>
        <div className="max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block justify-start">
        <Label htmlFor="small" value='Generated Password' className='flex'/>

        </div>
        <TextInput id="small" type="text" sizing="sm" className='mb-1' value={password}/>
      </div>
      <div className='rangeclass'>
        <div className="mb-1 grid grid-flow-col grid-cols-2 justify-stretch space-x-4">
          <Label htmlFor="ch-length" value="Character Length" className='justify-self-start flex '/> <p className='flex justify-self-end'>{rangeSliderValue}</p>
        </div>
        <RangeSlider id="ch-length" min="4" max="30" value={rangeSliderValue} onChange={(event)=>setRangeSliderValue(parseInt(event.target.value, 10))} className=''/>
      </div>
      <div className="mb-1 block justify-start">
          <Label htmlFor="switches" value="Settings" className='space-y-2 flex' />
        </div>
      <div id='switches' className="flex max-w-md flex-col gap-1">
      <SwitchComponents
 checked={lowerCaseSwitch} label="Include lowercase letters"  onChange={()=>setLowerCaseSwitch(!lowerCaseSwitch)} />
      <SwitchComponents
 checked={upperCaseSwitch} label="Include uppercase letters"   onChange={()=>setUpperCaseSwitch(!upperCaseSwitch)} />
      <SwitchComponents
 checked={numberSwitch}  label="include numbers"  onChange={()=>setNumberSwitch(!numberSwitch)} />
      <SwitchComponents 
 checked={specialSwitch} label='include special characters'  onChange={()=>setSpecialSwitch(!specialSwitch)} />
    </div>
    <Button onClick={generatePassword}>Generate Password</Button>
    </div>
    </Card>
    
    </div>
  )
}

export default App
