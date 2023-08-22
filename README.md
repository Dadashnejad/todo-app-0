This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Frontend Side :

به اپلیکیشن تودو لیست خوش آمدید. این پروژه یک اپلیکیشن مدیریت برنامه های روزمره میباشد. برای ساختن این برنامه از

- React
- Next.js
- TypeScript

  استفاده شده است که در آن میتوانید برنامه های که در آن ثبت کردید
  رو ادیت ، حذف یا اضافه کنید

## مقدمه | Introduction

این برنامه به شما این قابلیت رو ارائه میکنه که تسک های جدید بسازید ، اونارو ادیت کنید ، به عنوان انجام شده تیک بزنید و اونارو ادیت حتی دیلیت کنید. یک اپلیکیشن به کار آمد که به شما کمک میکنه تا مدیریت برنامه هاتون رو به خوبی انجام بدید

## قابلیت ها | Features

- تسک های جدید با متن مورد نظرتون بسازید
- تسک هارو به عنوان انجام شده علامت گذاری کنید
- متن اونارو ادیت کنید
- تسک هارو دیلیت کنید
- طراحی ریسپانسیو و قابل اجرا بر روی دستگاه های مختلف

## شروع کار

برای شروغ به کار با این اپلیکیشن بر روی دستگاه خود نیاز به انجام کار های زیر میباشد

1. از ریپازیتوری کلون بگیرید
   `git clone https://github.com/Dadashnejad/todo-app-0.git`
2. به دایرکتوری پروژه بروید
   `cd todo-app-0`
3. دپندنسی ها رو نصب کنید :
   `npm install`
4. دیتابیس postgres رو دانلود و نصب کنید

5. در cmd وارد postgres شوید
  `psql -U postgres`
6. دیتابیس با نام tododb بسازید

7.یک فایل با نام env. بسازید و کد زیر را کپی و به جای password پسورد خود را قرار دهید
DATABASE_URL="postgres://postgres:password@localhost:5432/tododb"
8. راه اندازی prisma دستورات زیر را به ترتیب در terminal اجرا کنید
  `npm i prisma --save-dev`
  `npx prisma init --datasource-provider postgresql`
  `npx prisma migrate dev --name init`
  

9. سرور رو استارت کنید:
   `npm run dev`
10. مرورگر رو باز کنید و به آدرس زیر بروید:
   `http://localhost:3000`

## نحوه استفاده

1. برای اضافه کردن یک تسک جدید داخل اینپوت مقداری وارد کنید و دکمه اضافه کردن به لیست رو بزنید
2. در صفحه اصلی یک لیست از تسک ها میبینید
3. برای اینکه یک تسک رو به عنوان انجام شده علامت گذاری کنید چک باکس کنار هر تسک رو کلیک کنید
4. برای ادیت بر روی دکمه ی ادیت بزنید
5. برای دیلیت بر روی دکمه دیلیت بزنید

## API

اپلیکیشن از یک
Restful API
ساده استفاده کرده تا با تسک ها تعامل برقرار کند
قابلیت انجام عمل های CRUD

## زبان های استفاده شده

- React: A JavaScript library for building user interfaces.
- Next.js: A React framework for server-rendered applications.
- TypeScript: A typed superset of JavaScript.
- CSS: Styling the app's appearance.
- PosgresSQL
- tailwind

## Developers

- Majid Ayoubi Raad | مجید ایوبی راد
- Amirhossein Dadashnejad | امیرحسین داداش نژاد
