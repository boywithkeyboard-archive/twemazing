import { remove } from 'fs-extra'
import { join } from 'node:path'

const deletePackages = async () => {
  await remove(join(__dirname, '../packages'))
}

deletePackages()
