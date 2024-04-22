import { faker } from '@faker-js/faker';

export class DataProcessor {
  async generateOrderRecords(orderData: any[]): Promise<any[]> {
    const orderRecords = [];

    orderData.forEach((order) => {
      const { date, time } = order;

      const orderDateTime = new Date(`${date}T${time}`);
      const randomNumber = faker.number.int({ min: 1, max: 100 });

      const orderRecord = {
        LoyaltyCardID: faker.number.int({ min: 1, max: 1400 }),
        LocationID: faker.number.int({ min: 1, max: 6 }),
        OrderTypeID:
          randomNumber <= 80 ? 1 : faker.number.int({ min: 2, max: 3 }),
        SellerID: faker.number.int({ min: 1, max: 60 }),
        PaymentMethod: randomNumber <= 40 ? 'Cash' : 'Credit Card',
        OrderDateTime: orderDateTime.toISOString(),
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      orderRecords.push(orderRecord);
    });

    return orderRecords;
  }

  async generateAssortmentSegments(pizzaTypesData: any[]): Promise<any[]> {
    const assortmentSegments = [];
    const uniqueCategories = new Set();

    pizzaTypesData.forEach((pizzaType) => {
      uniqueCategories.add(pizzaType.category);
    });

    for (
      let partnerLocationID = 1;
      partnerLocationID <= 6;
      partnerLocationID++
    ) {
      uniqueCategories.forEach((category) => {
        const randNumber = faker.number.int({ min: 1, max: 2 });
        const assortmentSegment = {
          PartnerLocationID: partnerLocationID,
          AssortmentSegmentType: category,
          Points: randNumber === 1 ? 10 : 15,
          CreateDate: new Date().toISOString(),
          UpdateDate: null,
        };

        assortmentSegments.push(assortmentSegment);
      });
    }

    return assortmentSegments;
  }

  async generateOrderDetails(
    orderDetailData: any[],
    pizzasData: any[],
    pizzaTypesData: any[],
  ): Promise<any[]> {
    const orderDetails = [];

    orderDetailData.forEach((orderDetail) => {
      const { order_id, pizza_id, quantity } = orderDetail;

      // Find pizza information based on pizza_id
      const pizza = pizzasData.find((pizza) => pizza.pizza_id === pizza_id);
      if (!pizza) return; // Skip if pizza not found

      // Find pizza type information based on pizza_type_id from pizza
      const pizzaType = pizzaTypesData.find(
        (pizzaType) => pizzaType.pizza_type_id === pizza.pizza_type_id,
      );
      if (!pizzaType) return; // Skip if pizza type not found

      const randNumber = faker.number.int({ min: 1, max: 20 });

      let assortmetID = 1;

      switch (pizzaType.category) {
        case 'Chicken': {
          assortmetID = 1;
          break;
        }
        case 'Classic': {
          assortmetID = 2;
          break;
        }
        case 'Supreme': {
          assortmetID = 3;
          break;
        }
        case 'Veggie': {
          assortmetID = 4;
          break;
        }
      }

      const orderDetailRecord = {
        OrderID: order_id,
        AssortmentSegmentID: assortmetID,
        PromoCampaignID:
          randNumber <= 19 ? null : faker.number.int({ min: 1, max: 13 }),
        ItemName: pizzaType.name,
        Quantity: quantity,
        Price: pizza.price,
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      orderDetails.push(orderDetailRecord);
    });

    return orderDetails;
  }

  async generatePartners(): Promise<any> {
    const partner = {
      Name: 'Pizza House',
      Description: 'Ukrainian pizza chain',
      ContactPerson: faker.person.fullName(),
      ContactEmail: faker.internet.email(),
      ContactPhone: '+380976123456',
      CreateDate: new Date().toISOString(),
      UpdateDate: null,
    };

    return partner;
  }

  async generatePartnerLocations(locationsData: any[]): Promise<any[]> {
    const partnerLocations = [];
    const selectedLocations = locationsData.slice(0, 6);

    selectedLocations.forEach((location) => {
      const {
        Restaurant_Name,
        Country_Code,
        City,
        Address,
        Latitude,
        Longitude,
      } = location;

      const partnerLocation = {
        PartnerID: 1,
        LocationName: Restaurant_Name,
        Address: Address,
        City: City,
        State: City,
        ZipCode: Country_Code.toString(),
        Country: 'Ukraine',
        Latitude: Latitude,
        Longitude: Longitude,
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      partnerLocations.push(partnerLocation);
    });

    return partnerLocations;
  }

  async generateEmployees(): Promise<any[]> {
    const employees = [];

    for (let LocationID = 1; LocationID <= 6; LocationID++) {
      for (let i = 0; i < 10; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const position = faker.person.jobType();
        const birthDate = faker.date.between({
          from: '1970-01-01',
          to: '2000-12-31',
        });
        const employmentStartDate = faker.date.between({
          from: '2014-01-01',
          to: '2014-12-31',
        });

        const employee = {
          PartnerLocationID: LocationID,
          FirstName: firstName,
          LastName: lastName,
          Position: position,
          BirthDate: birthDate.toISOString(),
          EmploymentStartDate: employmentStartDate.toISOString(),
          EmploymentEndDate: null,
          CreateDate: new Date().toISOString(),
          UpdateDate: null,
        };

        employees.push(employee);
      }
    }

    return employees;
  }

  async generateLoyaltyUsers(): Promise<any[]> {
    const loyaltyUsers = [];

    for (let i = 0; i < 1400; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      const phone = '+380976123456';
      const address = faker.location.streetAddress();
      const birthDate = faker.date.between({
        from: '1970-01-01',
        to: '2000-12-31',
      });

      const loyaltyUser = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Address: address,
        BirthDate: birthDate.toISOString(),
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      loyaltyUsers.push(loyaltyUser);
    }

    return loyaltyUsers;
  }

  async generateLoyaltyCards(): Promise<any[]> {
    const loyaltyCards = [];
    const cardNumbersSet = new Set();

    for (let i = 1; i <= 1400; i++) {
      const loyaltyUserID = i;
      let loyaltyCardTypeID;
      const randomNumber = Math.random();

      if (randomNumber < 0.6) {
        loyaltyCardTypeID = 1;
      } else if (randomNumber < 0.85) {
        loyaltyCardTypeID = 2;
      } else if (randomNumber < 0.9) {
        loyaltyCardTypeID = 3;
      } else {
        loyaltyCardTypeID = 4;
      }
      const cardNumber = generateUniqueCardNumber(cardNumbersSet);
      const currentBalance = faker.number.int({ min: 0, max: 1000 });
      const firstUsage = faker.date.between({
        from: '2015-01-01',
        to: '2015-02-01',
      });
      const lastUsage = faker.date.between({
        from: '2015-02-01',
        to: '2015-12-31',
      });
      const randNumber = faker.number.int({ min: 1, max: 200 });
      const status = randNumber <= 199 ? 'Active' : 'Inactive';

      const loyaltyCard = {
        LoyaltyUserID: loyaltyUserID,
        LoyaltyCardTypeID: loyaltyCardTypeID,
        CardNumber: cardNumber,
        CurrentBalance: currentBalance,
        FirstUsage: firstUsage.toISOString(),
        LastUsage: lastUsage.toISOString(),
        Status: status,
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      loyaltyCards.push(loyaltyCard);
    }

    return loyaltyCards;
  }

  async generateFeedbacks(orderRecords: any[]): Promise<any[]> {
    const feedbacks = [];

    for (let i = 1; i <= orderRecords.length; i++) {
      const randNumber = faker.number.int({ min: 1, max: 10 });
      if (randNumber <= 7) continue;
      const randomLoyaltyUser = faker.number.int({ min: 1, max: 1400 });
      const randomPartnerLocation = faker.number.int({ min: 1, max: 6 });

      const foodQuality = getQualityRating();
      const serviceQuality = getQualityRating();
      const overallImpression = getQualityRating();

      const feedback = {
        LoyaltyUserID: randomLoyaltyUser,
        PartnerLocationID: randomPartnerLocation,
        OrderID: i,
        FoodQuality: foodQuality,
        ServiceQuality: serviceQuality,
        OverallImpression: overallImpression,
        Comment: faker.lorem.sentence(),
        FeedbackDate: orderRecords[i - 1].OrderDateTime,
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      feedbacks.push(feedback);
    }

    return feedbacks;
  }

  async generatePointTransactions(
    orderRecords: any[],
    orderDetails: any[],
    assortmentSegments: any[],
  ): Promise<any[]> {
    const pointTransactions = [];

    for (let i = 1; i <= orderRecords.length; i++) {
      const orderID = i;

      // Find all order details for the current order ID
      const orderDetailsForOrder = orderDetails.filter(
        (detail) => detail.OrderID === orderID,
      );

      let pointsChange = 0;
      for (const detail of orderDetailsForOrder) {
        const assortmentSegment = assortmentSegments.find(
          (segment) =>
            assortmentSegments.indexOf(segment) === detail.AssortmentSegmentID,
        );

        if (assortmentSegment) {
          // Calculate PointsChange based on assortment segment points and order detail quantity
          pointsChange += assortmentSegment.Points * detail.Quantity;
        }
      }

      const accrualTransaction = {
        OrderRecordID: orderID,
        LoyaltyCardID: orderRecords[i - 1].LoyaltyCardID,
        PointTransactionType: 'Accrual',
        PointsChange: pointsChange,
        OrderDate: orderRecords[i - 1].OrderDateTime,
        CreateDate: new Date().toISOString(),
        UpdateDate: null,
      };

      pointTransactions.push(accrualTransaction);

      // Create Withdrawn PointTransaction with 35% probability
      if (faker.number.float({ min: 0, max: 1 }) <= 0.55) {
        const withdrawnPointsChange = faker.number.int({
          min: 5,
          max: 10,
        });

        const withdrawnTransaction = {
          OrderRecordID: orderID,
          LoyaltyCardID: orderRecords[i - 1].LoyaltyCardID,
          PointTransactionType: 'Withdrawn',
          PointsChange: withdrawnPointsChange + pointsChange,
          OrderDate: orderRecords[i - 1].OrderDateTime,
          CreateDate: new Date().toISOString(),
          UpdateDate: null,
        };

        pointTransactions.push(withdrawnTransaction);
      }
    }

    return pointTransactions;
  }

  async generateLoyaltyPoints(pointTransactions: any[]): Promise<any[]> {
    const loyaltyPoints = [];

    for (let i = 1; i <= pointTransactions.length; i++) {
      const randNumber = faker.number.int({ min: 1, max: 100 });
      if (pointTransactions[i - 1].PointTransactionType === 'Accrual') {
        const loyaltyPoint = {
          LoyaltyCardID: pointTransactions[i - 1].LoyaltyCardID,
          PointTransactionID: i,
          PolicyID: randNumber < 98 ? 1 : faker.number.int({ min: 2, max: 3 }),
          PointsAmount: pointTransactions[i - 1].PointsChange,
          AccrualDateTime: pointTransactions[i - 1].OrderDate,
          WithdrawalDateTime: null,
          CreateDate: new Date().toISOString(),
          UpdateDate: null,
        };

        loyaltyPoints.push(loyaltyPoint);
      }
    }

    return loyaltyPoints;
  }
}

function generateUniqueCardNumber(cardNumbersSet) {
  let cardNumber;
  do {
    cardNumber = Array.from({ length: 16 }, () =>
      faker.number.int({ min: 0, max: 9 }),
    ).join('');
  } while (cardNumbersSet.has(cardNumber));

  cardNumbersSet.add(cardNumber);
  return cardNumber;
}

function getQualityRating() {
  const randomNumber = Math.random();

  if (randomNumber < 0.1) {
    return 1;
  } else if (randomNumber < 0.2) {
    return 2;
  } else if (randomNumber < 0.3) {
    return 3;
  } else if (randomNumber < 0.7) {
    return 4;
  } else {
    return 5;
  }
}
