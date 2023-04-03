import React from 'react'
import Select from './Select'

export default function Table({ heading, options, color }) {
    return (
        <>
            <div className='flex flex-col'>
                <div className={`border-2 border-black border-b-0 p-3 font-semibold text-center ${color}`}>
                    <h2>{heading}</h2>
                </div>
                <table>
                    <tbody className='border-2 border-black'>
                        <tr>
                            <td className='border-2 border-black p-2'>{options[0]}</td>
                            <td className='border-2 border-black p-2'>
                                <Select id={options[0].split("-")[0].trim().replace(" ", "_")} />
                            </td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black p-2' >{options[1]}</td>
                            <td className='border-2 border-black p-2' >
                                <Select id={options[1].split("-")[0].trim().replace(" ", "_")} />
                            </td>
                        </tr>
                        <tr>
                            <td className='border-2 border-black p-2' >{options[2]}</td>
                            <td className='border-2 border-black p-2' >
                                <Select id={options[2].split("-")[0].trim().replace(" ", "_")} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
