import { PrismaClient } from '@prisma/client';

// PrismaClient 객체 생성
const prismaClientSingleton = () => {
    return new PrismaClient();
};

// Typescript 를 위한 전역 객체의 타입 선언
declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// globalThis 객체가 있으면 사용하고, 없으면 새로 PrismaClient 객체를 생성한다.
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// 개발환경이라면.. 반환하는 prisma 객체를 다시 전역객체에 저장해서 다음에 재사용한다.
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
