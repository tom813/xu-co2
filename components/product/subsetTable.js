import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Box} from '@chakra-ui/react'

  function SubsetTable({tableData}){
      return(
        <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>State</Th>
            <Th>Number of entries</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {console.log(tableData)}
          {tableData.map((state) => {
            return(
              <Tr>
                <Td>{state.state}</Td>
                <Td>{state.num_of_entries}</Td>
                <Td isNumeric>{state.price}</Td>
              </Tr>    
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>State</Th>
            <Th>Number of entries</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Tfoot>
      </Table>
      )
  }

  export default SubsetTable