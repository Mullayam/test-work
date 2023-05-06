import React from 'react'
import Link from 'next/link'

const Table = (
    { headings, data }: {
        headings: string[];
        data: {
            company: string;
            designation: string;
            experience: string;
        }[]
    }) => {


    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + "...";
    }

    return (
        <table className="w-full rounded-md mx-auto overflow-hidden ">
            <thead className=''>
                <tr className="text-black uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Company</th>
                    <th className="py-3 px-6 text-left">Designation</th>
                    <th className="py-3 px-6 text-left">Experience</th>
                    {/* {headings.map((item, index) =>
                    (
                        <th key={index} className="py-3 border border-black px-6 text-left">{item}
                        </th>
                    )
                    )} */}
                </tr>
            </thead>
            <tbody className="text-emphasis border max-w-full border-muted text-sm font-light">
                {data.map(({ company, designation, experience }, index) => (
                    <tr key={index} className="font-medium hover:bg-gray-100">

                        <td className="py-3  px-6 text-center  whitespace-nowrap">{index + 1}</td>
                        <td className=" py-3 px-6 text-left">{truncateString(company, 12)}</td>
                        <td className=" py-3 px-6 text-left">{truncateString(designation, 12)}</td>
                        <td className="py-3 px-6 mx-auto text-left">{truncateString(experience, 12)}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    )
};


export default Table;
