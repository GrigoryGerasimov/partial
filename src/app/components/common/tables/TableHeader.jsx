import React from 'react'
import { tableColumns } from './tableColumns.js'

export const TableHeader = () => {
	return (
		<thead>
			<tr className='transition-all hover:bg-yellow-900 hover:bg-opacity-90 hover:text-red-100 hover:text-opacity-60'>
				{Object.keys(tableColumns).map((columnName) => (
					<th key={columnName}>{tableColumns[columnName].name}</th>
				))}
			</tr>
		</thead>
	)
}
