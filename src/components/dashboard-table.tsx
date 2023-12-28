import { faker } from '@faker-js/faker'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import { Divide } from 'lucide-react'

const computers = [
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int(3),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int(3),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int(3),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int(3),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int(3),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int(3),
    image: 'https://source.unsplash.com/random/256×256',
  },
]

export function DashboardTable() {
  const totalPrice = computers.reduce((acc, currentValue) => {
    return acc + currentValue.price
  }, 0)
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Tier</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {computers.map((computer) => (
          <TableRow key={computer.id}>
            <TableCell>
              <Image
                src={computer.image}
                height={150}
                width={150}
                alt="Preview"
              />
            </TableCell>
            <TableCell>{computer.name}</TableCell>
            <TableCell>
              <TierTag tier={computer.tier} />
            </TableCell>
            <TableCell className="text-right">
              {computer.price.toLocaleString('en-US', {
                currency: 'USD',
                style: 'currency',
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {totalPrice.toLocaleString('en-US', {
              currency: 'USD',
              style: 'currency',
            })}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const TierTag = (props: { tier: number }) => {
  return <div>{props.tier}</div>
}
