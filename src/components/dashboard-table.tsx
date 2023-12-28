import { faker } from '@faker-js/faker'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import { Input } from './ui/input'

const computers = [
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int({
      min: 1,
      max: 3,
    }),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int({
      min: 1,
      max: 3,
    }),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int({
      min: 1,
      max: 3,
    }),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int({
      min: 1,
      max: 3,
    }),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int({
      min: 1,
      max: 3,
    }),
    image: 'https://source.unsplash.com/random/256×256',
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.number.int({ min: 400, max: 4000 }),
    tier: faker.number.int({
      min: 1,
      max: 3,
    }),
    image: 'https://source.unsplash.com/random/256×256',
  },
]

export function DashboardTable() {
  const totalPrice = computers.reduce((acc, currentValue) => {
    return acc + currentValue.price
  }, 0)
  return (
    <div className="m-5 flex flex-col gap-5">
      <div className="flex items-center justify-end flex-1">
        <div className="w-[300px]">
          <Input placeholder="Search" />
        </div>
      </div>
      <div className="border rounded-lg flex-1">
        <Table>
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
              <TableRow key={computer.id} className="text-xl">
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
                <TableCell className="text-right font-medium border-l">
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
        d d
      </div>
    </div>
  )
}

const TierTag = (props: { tier: number }) => {
  switch (props.tier) {
    case 1:
      return <div>Entry Level</div>
    case 2:
      return <div>Mid Tier</div>
    case 3:
      return <div>High Tier</div>
    default:
      return <div>N/A</div>
  }
}
