import { Input, InputRef, Form, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useRef } from "react";
import useTodos from "../hooks/useTodos";

function TodosList() {
  const { todos, addTodo } = useTodos();
  const [form] = useForm();

  async function handleSubmit({ description }) {
    await addTodo(description);
    form.resetFields();
  }

  return (
    <>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ol>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item name="description">
          <Input placeholder="What to do next?" />
        </Form.Item>
        <Button type="primary" htmlType="submit" hidden></Button>
      </Form>
    </>
  );
}

export default TodosList;
