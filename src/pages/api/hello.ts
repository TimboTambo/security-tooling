// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { pseudoRandomBytes } from 'crypto'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.status(200).json({ name: req.body })

  eval(req.body)
  res.setHeader('X-POWERED-BY', 'My vulnerable technology')

  await fs.readFile(req.body)

  const badRegex = /^(([a-z])+.)+[A-Z]([a-z])+$/
  badRegex.exec(req.body)

  pseudoRandomBytes(256, req.body)

  console.warn(
    '-----BEGIN OPENSSH PRIVATE KEY-----\
  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\
  hG+n7P1ke1ag4SOn0XtjeglxdO8=\
  ---1aEND OPENSSH PRIVATE KEY-----'
  )
}

export default handler
