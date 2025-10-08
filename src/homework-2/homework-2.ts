import { STATUS, PRIORITY, FILE_NAME } from './constants'
import fs from 'fs'
import { Task, Status, Priority } from './Task'

// Отримання всіх завдань
function getTasks() {
  const tasksJson = fs.readFileSync(FILE_NAME, 'utf-8')
  const tasks: Task[] = JSON.parse(tasksJson)

  // Додавання статусу та пріоритету за замовчуванням
  const tasksWithDefaults = tasks.map((task: Task) => ({
    ...task,
    status: task.status ?? STATUS.TODO,
    priority: task.priority ?? PRIORITY.LOW
  }))

  return tasksWithDefaults
}

// Отримання деталей завдання за вказаним id
function detailTask(id: string | number) {
  const tasks = getTasks()
  const task = tasks.find((task) => task.id === id)

  if (!task) {
    throw new Error('Task not found')
  }

  return task
}

// Створення нового завдання
function createTask(task: Task) {
  let tasks = getTasks()

  // Додавання статусу та пріоритету за замовчуванням
  const taskWithDefaults = {
    ...task,
    status: task.status ?? STATUS.TODO,
    priority: task.priority ?? PRIORITY.LOW
  }

  tasks.push(taskWithDefaults)

  return tasks
}

// Апдейт деталей завдання
function updateTask(id: string | number, updates: Partial<Task>) {
  const tasks = getTasks()
  const task = tasks.find((task) => task.id === id)

  const updatedTask = { ...task, ...updates }
  return updatedTask
}

// Видалення завдання
function deleteTask(id: string | number) {
  let tasks = getTasks()
  tasks = tasks.filter((task) => task.id !== id)
  return tasks
}

// Фільтрація завдань за статусом
function filterTasksByStatus(status: Status) {
  let tasks = getTasks()
  tasks = tasks.filter((task) => task.status === status)
  return tasks
}

// Фільтрація завдань за датою створення
function filterTasksByCreatedAt(createdAt: string | Date) {
  let tasks = getTasks()
  tasks = tasks.filter((task) => task.createdAt === createdAt)
  return tasks
}

// Фільтрація завдань за пріоритетом
function filterTasksByPriority(priority: Priority) {
  let tasks = getTasks()
  tasks = tasks.filter((task) => task.priority === priority)
  return tasks
}

// Перевірка, чи завершено завдання до дедлайну
function checkTasksDeadline(id: string | number): string {
  let tasks = getTasks()
  const task = tasks.find((task) => task.id === id)

  if (!task) {
    throw new Error('Task not found')
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const deadline = new Date(task.deadline)
  deadline.setHours(0, 0, 0, 0)

  if (task.status === STATUS.DONE && deadline >= today) {
    return `Завдання id: ${task.id}, title: '${task.title}' завершено до дедлайну`
  } else {
    return `Завдання id: ${task.id}, title: '${task.title}' не завершено до дедлайну`
  }
}

// Отримання деталей завдання за вказаним id
const task = detailTask(2)
console.log(task)

// Створення нового завдання
const newTask = createTask({
  id: 11,
  title: 'Create new task',
  createdAt: new Date(),
  deadline: new Date()
})
console.log(newTask)

// Апдейт деталей завдання
const updatedTask = updateTask(2, { title: 'Updated task' })
console.log(updatedTask)

// Видалення завдання
const deletedTask = deleteTask(3)
console.log(deletedTask)

// Фільтрація завдань за статусом
const filteredTasksByStatus = filterTasksByStatus(STATUS.DONE)
console.log(filteredTasksByStatus)

// Фільтрація завдань за датою створення
const filteredTasksByCreatedAt = filterTasksByCreatedAt('2025-01-20')
console.log(filteredTasksByCreatedAt)

// Фільтрація завдань за пріоритетом
const filteredTasksByPriority = filterTasksByPriority(PRIORITY.MEDIUM)
console.log(filteredTasksByPriority)

// Перевірка, чи завершено завдання до дедлайну
const checkedTasks = checkTasksDeadline(2)
console.log(checkedTasks)
