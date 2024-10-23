"use client";

import { Card, CardHeader } from "@nextui-org/react";

export function Header() {
  return (
    <Card className="bg-gradient-to-br from-indigo-500 to-pink-500 border-none">
      <CardHeader className="flex-col items-center gap-2 p-5">
        <h1 className="text-3xl font-bold text-white">去哪吃</h1>
        <p className="text-white/80">随机推荐午餐和晚餐地点</p>
      </CardHeader>
    </Card>
  );
}