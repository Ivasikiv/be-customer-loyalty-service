-- CreateTable
CREATE TABLE "AssortmentSegment" (
    "AssortmentSegmentID" SERIAL NOT NULL,
    "PartnerLocationID" INTEGER NOT NULL,
    "AssortmentSegmentType" VARCHAR(50) NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Points" INTEGER NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "AssortmentSegment_pkey" PRIMARY KEY ("AssortmentSegmentID")
);

-- CreateTable
CREATE TABLE "Employee" (
    "EmployeeID" SERIAL NOT NULL,
    "PartnerLocationID" INTEGER NOT NULL,
    "FirstName" VARCHAR(50) NOT NULL,
    "LastName" VARCHAR(50) NOT NULL,
    "Position" VARCHAR(100) NOT NULL,
    "BirthDate" DATE,
    "EmploymentStartDate" DATE NOT NULL,
    "EmploymentEndDate" DATE,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("EmployeeID")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "FeedbackID" SERIAL NOT NULL,
    "LoyaltyUserID" INTEGER NOT NULL,
    "PartnerLocationID" INTEGER NOT NULL,
    "OrderID" INTEGER NOT NULL,
    "FoodQuality" INTEGER NOT NULL,
    "ServiceQuality" INTEGER NOT NULL,
    "OverallImpression" INTEGER NOT NULL,
    "Comment" TEXT,
    "FeedbackDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("FeedbackID")
);

-- CreateTable
CREATE TABLE "LoyaltyCard" (
    "LoyaltyCardID" SERIAL NOT NULL,
    "LoyaltyUserID" INTEGER NOT NULL,
    "LoyaltyCardTypeID" INTEGER NOT NULL,
    "CardNumber" VARCHAR(20) NOT NULL,
    "CurrentBalance" INTEGER NOT NULL DEFAULT 0,
    "FirstUsage" TIMESTAMP(6),
    "LastUsage" TIMESTAMP(6),
    "Status" VARCHAR(20) NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "LoyaltyCard_pkey" PRIMARY KEY ("LoyaltyCardID")
);

-- CreateTable
CREATE TABLE "LoyaltyCardType" (
    "LoyaltyCardTypeID" SERIAL NOT NULL,
    "DiscountPercentage" DECIMAL(5,2) NOT NULL,
    "TypeName" VARCHAR(50) NOT NULL,
    "Description" TEXT NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "LoyaltyCardType_pkey" PRIMARY KEY ("LoyaltyCardTypeID")
);

-- CreateTable
CREATE TABLE "LoyaltyPoint" (
    "LoyaltyPointID" SERIAL NOT NULL,
    "LoyaltyCardID" INTEGER NOT NULL,
    "PointTransactionID" INTEGER NOT NULL,
    "PolicyID" INTEGER NOT NULL,
    "PointsAmount" INTEGER NOT NULL,
    "AccrualDateTime" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "WithdrawalDateTime" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "LoyaltyPoint_pkey" PRIMARY KEY ("LoyaltyPointID")
);

-- CreateTable
CREATE TABLE "LoyaltyUser" (
    "LoyaltyUserID" SERIAL NOT NULL,
    "FirstName" VARCHAR(50) NOT NULL,
    "LastName" VARCHAR(50) NOT NULL,
    "Email" VARCHAR(100) NOT NULL,
    "Phone" VARCHAR(12),
    "Address" VARCHAR(255),
    "BirthDate" DATE,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "LoyaltyUser_pkey" PRIMARY KEY ("LoyaltyUserID")
);

-- CreateTable
CREATE TABLE "Notification" (
    "NotificationID" SERIAL NOT NULL,
    "LoyaltyUserID" INTEGER NOT NULL,
    "NotificationTypeID" INTEGER NOT NULL,
    "Content" TEXT NOT NULL,
    "NotificationStatus" VARCHAR(16) NOT NULL,
    "SentDateTime" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("NotificationID")
);

-- CreateTable
CREATE TABLE "NotificationType" (
    "NotificationTypeID" SERIAL NOT NULL,
    "TypeName" VARCHAR(50) NOT NULL,
    "Description" TEXT NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "NotificationType_pkey" PRIMARY KEY ("NotificationTypeID")
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "OrderDetailID" SERIAL NOT NULL,
    "OrderID" INTEGER NOT NULL,
    "AssortmentSegmentID" INTEGER NOT NULL,
    "PromoCampaignID" INTEGER NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "OrderDetail_pkey" PRIMARY KEY ("OrderDetailID")
);

-- CreateTable
CREATE TABLE "OrderRecord" (
    "OrderID" SERIAL NOT NULL,
    "LoyaltyCardID" INTEGER NOT NULL,
    "LocationID" INTEGER NOT NULL,
    "OrderTypeID" INTEGER NOT NULL,
    "SellerID" INTEGER NOT NULL,
    "PaymentMethod" VARCHAR(20),
    "OrderDateTime" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "OrderRecord_pkey" PRIMARY KEY ("OrderID")
);

-- CreateTable
CREATE TABLE "OrderType" (
    "OrderTypeID" SERIAL NOT NULL,
    "TypeName" VARCHAR(50) NOT NULL,
    "Description" TEXT NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "OrderType_pkey" PRIMARY KEY ("OrderTypeID")
);

-- CreateTable
CREATE TABLE "Partner" (
    "PartnerID" SERIAL NOT NULL,
    "Name" VARCHAR(100) NOT NULL,
    "Description" TEXT NOT NULL,
    "ContactPerson" VARCHAR(50) NOT NULL,
    "ContactEmail" VARCHAR(50),
    "ContactPhone" VARCHAR(12),
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("PartnerID")
);

-- CreateTable
CREATE TABLE "PartnerLocation" (
    "LocationID" SERIAL NOT NULL,
    "PartnerID" INTEGER NOT NULL,
    "LocationName" VARCHAR(100) NOT NULL,
    "Address" VARCHAR(255),
    "City" VARCHAR(100),
    "State" VARCHAR(100),
    "ZipCode" VARCHAR(20),
    "Country" VARCHAR(100),
    "Latitude" DECIMAL(10,8),
    "Longitude" DECIMAL(11,8),
    "ContactPerson" VARCHAR(50),
    "ContactEmail" VARCHAR(50),
    "ContactPhone" VARCHAR(12),
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "PartnerLocation_pkey" PRIMARY KEY ("LocationID")
);

-- CreateTable
CREATE TABLE "PointExpiryPolicy" (
    "PolicyID" SERIAL NOT NULL,
    "ExpiryPeriod" INTEGER NOT NULL,
    "ExpiryType" VARCHAR(50) NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "PointExpiryPolicy_pkey" PRIMARY KEY ("PolicyID")
);

-- CreateTable
CREATE TABLE "PointTransaction" (
    "PointTransactionID" SERIAL NOT NULL,
    "OrderRecordID" INTEGER NOT NULL,
    "LoyaltyCardID" INTEGER NOT NULL,
    "PointTransactionType" VARCHAR(50) NOT NULL,
    "PointsChange" INTEGER NOT NULL,
    "OrderDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "PointTransaction_pkey" PRIMARY KEY ("PointTransactionID")
);

-- CreateTable
CREATE TABLE "PromoCampaign" (
    "PromoCampaignID" SERIAL NOT NULL,
    "PromoCampaignName" VARCHAR(100) NOT NULL,
    "Description" TEXT NOT NULL,
    "StartDate" DATE NOT NULL,
    "EndDate" DATE NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "PromoCampaign_pkey" PRIMARY KEY ("PromoCampaignID")
);

-- CreateTable
CREATE TABLE "PromoCampaignRedemption" (
    "RedemptionID" SERIAL NOT NULL,
    "PromoCampaignID" INTEGER NOT NULL,
    "LoyaltyCardID" INTEGER NOT NULL,
    "RedeemedDate" DATE NOT NULL,
    "CreateDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(6),

    CONSTRAINT "PromoCampaignRedemption_pkey" PRIMARY KEY ("RedemptionID")
);

-- CreateIndex
CREATE UNIQUE INDEX "AssortmentSegment_AssortmentSegmentID_key" ON "AssortmentSegment"("AssortmentSegmentID");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_EmployeeID_key" ON "Employee"("EmployeeID");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_FeedbackID_key" ON "Feedback"("FeedbackID");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_OrderID_key" ON "Feedback"("OrderID");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyCard_LoyaltyCardID_key" ON "LoyaltyCard"("LoyaltyCardID");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyCard_CardNumber_key" ON "LoyaltyCard"("CardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyCardType_LoyaltyCardTypeID_key" ON "LoyaltyCardType"("LoyaltyCardTypeID");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyPoint_LoyaltyPointID_key" ON "LoyaltyPoint"("LoyaltyPointID");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyPoint_PointTransactionID_key" ON "LoyaltyPoint"("PointTransactionID");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyUser_LoyaltyUserID_key" ON "LoyaltyUser"("LoyaltyUserID");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyUser_Email_key" ON "LoyaltyUser"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyUser_Phone_key" ON "LoyaltyUser"("Phone");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_NotificationID_key" ON "Notification"("NotificationID");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationType_NotificationTypeID_key" ON "NotificationType"("NotificationTypeID");

-- CreateIndex
CREATE UNIQUE INDEX "OrderDetail_OrderDetailID_key" ON "OrderDetail"("OrderDetailID");

-- CreateIndex
CREATE UNIQUE INDEX "OrderRecord_OrderID_key" ON "OrderRecord"("OrderID");

-- CreateIndex
CREATE UNIQUE INDEX "OrderType_OrderTypeID_key" ON "OrderType"("OrderTypeID");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_PartnerID_key" ON "Partner"("PartnerID");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerLocation_LocationID_key" ON "PartnerLocation"("LocationID");

-- CreateIndex
CREATE UNIQUE INDEX "PointExpiryPolicy_PolicyID_key" ON "PointExpiryPolicy"("PolicyID");

-- CreateIndex
CREATE UNIQUE INDEX "PointTransaction_PointTransactionID_key" ON "PointTransaction"("PointTransactionID");

-- CreateIndex
CREATE UNIQUE INDEX "PromoCampaign_PromoCampaignID_key" ON "PromoCampaign"("PromoCampaignID");

-- CreateIndex
CREATE UNIQUE INDEX "PromoCampaignRedemption_RedemptionID_key" ON "PromoCampaignRedemption"("RedemptionID");

-- AddForeignKey
ALTER TABLE "AssortmentSegment" ADD CONSTRAINT "AssortmentSegment_AssortmentSegmentID_fkey" FOREIGN KEY ("AssortmentSegmentID") REFERENCES "PartnerLocation"("LocationID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_PartnerLocationID_fkey" FOREIGN KEY ("PartnerLocationID") REFERENCES "PartnerLocation"("LocationID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_LoyaltyUserID_fkey" FOREIGN KEY ("LoyaltyUserID") REFERENCES "LoyaltyUser"("LoyaltyUserID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_OrderID_fkey" FOREIGN KEY ("OrderID") REFERENCES "OrderRecord"("OrderID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_PartnerLocationID_fkey" FOREIGN KEY ("PartnerLocationID") REFERENCES "PartnerLocation"("LocationID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LoyaltyCard" ADD CONSTRAINT "LoyaltyCard_LoyaltyCardTypeID_fkey" FOREIGN KEY ("LoyaltyCardTypeID") REFERENCES "LoyaltyCardType"("LoyaltyCardTypeID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LoyaltyCard" ADD CONSTRAINT "LoyaltyCard_LoyaltyUserID_fkey" FOREIGN KEY ("LoyaltyUserID") REFERENCES "LoyaltyUser"("LoyaltyUserID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LoyaltyPoint" ADD CONSTRAINT "LoyaltyPoint_LoyaltyCardID_fkey" FOREIGN KEY ("LoyaltyCardID") REFERENCES "LoyaltyCard"("LoyaltyCardID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LoyaltyPoint" ADD CONSTRAINT "LoyaltyPoint_PointTransactionID_fkey" FOREIGN KEY ("PointTransactionID") REFERENCES "PointTransaction"("PointTransactionID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LoyaltyPoint" ADD CONSTRAINT "LoyaltyPoint_PolicyID_fkey" FOREIGN KEY ("PolicyID") REFERENCES "PointExpiryPolicy"("PolicyID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_LoyaltyUserID_fkey" FOREIGN KEY ("LoyaltyUserID") REFERENCES "LoyaltyUser"("LoyaltyUserID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_NotificationTypeID_fkey" FOREIGN KEY ("NotificationTypeID") REFERENCES "NotificationType"("NotificationTypeID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_AssortmentSegmentID_fkey" FOREIGN KEY ("AssortmentSegmentID") REFERENCES "AssortmentSegment"("AssortmentSegmentID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_OrderID_fkey" FOREIGN KEY ("OrderID") REFERENCES "OrderRecord"("OrderID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_PromoCampaignID_fkey" FOREIGN KEY ("PromoCampaignID") REFERENCES "PromoCampaign"("PromoCampaignID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderRecord" ADD CONSTRAINT "OrderRecord_LocationID_fkey" FOREIGN KEY ("LocationID") REFERENCES "PartnerLocation"("LocationID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderRecord" ADD CONSTRAINT "OrderRecord_LoyaltyCardID_fkey" FOREIGN KEY ("LoyaltyCardID") REFERENCES "LoyaltyCard"("LoyaltyCardID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderRecord" ADD CONSTRAINT "OrderRecord_OrderTypeID_fkey" FOREIGN KEY ("OrderTypeID") REFERENCES "OrderType"("OrderTypeID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderRecord" ADD CONSTRAINT "OrderRecord_SellerID_fkey" FOREIGN KEY ("SellerID") REFERENCES "Employee"("EmployeeID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PartnerLocation" ADD CONSTRAINT "PartnerLocation_PartnerID_fkey" FOREIGN KEY ("PartnerID") REFERENCES "Partner"("PartnerID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PointTransaction" ADD CONSTRAINT "PointTransaction_LoyaltyCardID_fkey" FOREIGN KEY ("LoyaltyCardID") REFERENCES "LoyaltyCard"("LoyaltyCardID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PointTransaction" ADD CONSTRAINT "PointTransaction_OrderRecordID_fkey" FOREIGN KEY ("OrderRecordID") REFERENCES "OrderRecord"("OrderID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PromoCampaignRedemption" ADD CONSTRAINT "PromoCampaignRedemption_LoyaltyCardID_fkey" FOREIGN KEY ("LoyaltyCardID") REFERENCES "LoyaltyCard"("LoyaltyCardID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PromoCampaignRedemption" ADD CONSTRAINT "PromoCampaignRedemption_PromoCampaignID_fkey" FOREIGN KEY ("PromoCampaignID") REFERENCES "PromoCampaign"("PromoCampaignID") ON DELETE NO ACTION ON UPDATE NO ACTION;
