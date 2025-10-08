import { PRIORITY, STATUS } from './constants'

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY]
export type Status = (typeof STATUS)[keyof typeof STATUS]

export type Task = {
  id: string | number
  title: string
  description?: string
  createdAt: string | Date
  status?: Status
  priority?: Priority
  deadline: string | Date
}
