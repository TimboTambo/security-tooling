// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { pseudoRandomBytes } from 'crypto'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.status(200).json({ name: req.body })

  console.warn('-----BEGIN PRIVATE KEY-----')

  eval(req.body)
  res.setHeader('X-POWERED-BY', 'My vulnerable technology')

  await fs.readFile(req.body)

  const badRegex = /^(([a-z])+.)+[A-Z]([a-z])+$/
  badRegex.exec(req.body)

  pseudoRandomBytes(256, req.body)
}

export default handler
