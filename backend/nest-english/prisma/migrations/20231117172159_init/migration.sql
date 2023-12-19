-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "eng" TEXT NOT NULL,
    "fr" TEXT NOT NULL,
    "hint" TEXT,
    "level" TEXT NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_eng_key" ON "Word"("eng");
