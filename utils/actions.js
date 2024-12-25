"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export async function getPosts() {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export const createTask = async (formData) => {
  const title = formData.get("title");
  await prisma.todo.create({
    data: {
      title,
    },
  });
  revalidatePath("/");
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};

export const getTask = async (id) => {
  return await prisma.todo.findUnique({
    where: {
      id,
    },
  });
};

export const updateTask = async (formData) => {
  const id = formData.get("id");
  const title = formData.get("title");
  const completed = formData.get("completed");
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
