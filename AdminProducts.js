import React from 'react'
import StyledTable from '../styledComponents/StyledTable'

export default function AdminProducts(props) {
  return (
    <StyledTable>
        <tr>
            <th>Id</th>
            <th>Card</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Category</th>
            <th>Picture</th>
        </tr>
        {
            props.products.map((product, index) =>
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.card}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td>{product.category}</td>
                    <td><img className='logoImg' src={`wallpapers/${product.path}`} alt=""/></td>
                    <td><button>Modify</button></td>
                    <td><button>Delete</button></td>
                </tr>
            )
        }
    </StyledTable>
  )
}
