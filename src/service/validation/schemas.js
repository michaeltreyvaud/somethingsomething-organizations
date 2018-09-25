const Joi = require('joi');

const fridge = {
  item: {
    ID: Joi.string().required().error(new Error('Invalid id supplied')),
    NAME: Joi.string().required().error(new Error('Invalid name supplied')),
    DESCRIPTION: Joi.string().required().error(new Error('Invalid description supplied')),
    IMAGE: Joi.string().uri().error(new Error('Invalid image supplied')),
    FROM: Joi.object().keys({
      company: Joi.string().required().error(new Error('Invalid company supplied')),
      id: Joi.string().required().error(new Error('Invalid id supplied')),
      name: Joi.string().required().error(new Error('Invalid name supplied')),
    }),
    LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
    PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
    ORDER: Joi.string().error(new Error('Invalid order supplied')),
  },
};

const fridgeTask = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FRIDGE_ITEM: {
    id: Joi.string().required().error(new Error('Invalid fridge id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  },
  TEAM: {
    name: Joi.string().required().error(new Error('Invalid team name supplied')),
  },
  USER: {
    EMAIL: Joi.string().email().error(new Error('Invalid email supplied')),
    FIRST_NAME: Joi.string().required().error(new Error('Invalid first name supplied')),
    LAST_NAME: Joi.string().required().error(new Error('Invalid last name supplied')),
  },
  DAY: Joi.string().required().error(new Error('Invalid day supplied')),
  TIME: Joi.number().required().error(new Error('Invalid expiry time supplied')),
  DESCRIPTION: Joi.string().required().error(new Error('Invalid description supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const fridgeLog = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FRIDGE_ITEM: {
    id: Joi.string().required().error(new Error('Invalid fridge id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  },
  TEMPERATURE: Joi.number().required().error(new Error('Invalid temperature supplied')),
  USER: {
    EMAIL: Joi.string().email().error(new Error('Invalid email supplied')),
    FIRST_NAME: Joi.string().required().error(new Error('Invalid first name supplied')),
    LAST_NAME: Joi.string().required().error(new Error('Invalid last name supplied')),
  },
  IMAGE: Joi.string().uri().error(new Error('Invalid image supplied')),
  COMMENTS: Joi.string().error(new Error('Invalid comments supplied')),
  SIGNATURE: Joi.string().uri().required().error(new Error('Invalid signature supplied')),
  CREATED_AT: Joi.number().required().error(new Error('Invalid createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const freezer = {
  item: {
    ID: Joi.string().required().error(new Error('Invalid id supplied')),
    NAME: Joi.string().required().error(new Error('Invalid name supplied')),
    DESCRIPTION: Joi.string().required().error(new Error('Invalid description supplied')),
    IMAGE: Joi.string().uri().error(new Error('Invalid image supplied')),
    FROM: Joi.object().keys({
      company: Joi.string().required().error(new Error('Invalid company supplied')),
      id: Joi.string().required().error(new Error('Invalid id supplied')),
      name: Joi.string().required().error(new Error('Invalid name supplied')),
    }),
    LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
    PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
    ORDER: Joi.string().error(new Error('Invalid order supplied')),
  },
};

const freezerTask = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FREEZER_ITEM: {
    id: Joi.string().required().error(new Error('Invalid freezer id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  },
  TEAM: {
    name: Joi.string().required().error(new Error('Invalid team name supplied')),
  },
  USER: {
    EMAIL: Joi.string().email().error(new Error('Invalid email supplied')),
    FIRST_NAME: Joi.string().required().error(new Error('Invalid first name supplied')),
    LAST_NAME: Joi.string().required().error(new Error('Invalid last name supplied')),
  },
  DAY: Joi.string().required().error(new Error('Invalid day supplied')),
  TIME: Joi.number().required().error(new Error('Invalid expiry time supplied')),
  DESCRIPTION: Joi.string().required().error(new Error('Invalid description supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const freezerLog = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FREEZER_ITEM: {
    id: Joi.string().required().error(new Error('Invalid freezer id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  },
  TEMPERATURE: Joi.number().required().error(new Error('Invalid temperature supplied')),
  USER: {
    EMAIL: Joi.string().email().error(new Error('Invalid email supplied')),
    FIRST_NAME: Joi.string().required().error(new Error('Invalid first name supplied')),
    LAST_NAME: Joi.string().required().error(new Error('Invalid last name supplied')),
  },
  IMAGE: Joi.string().uri().error(new Error('Invalid image supplied')),
  COMMENTS: Joi.string().error(new Error('Invalid comments supplied')),
  SIGNATURE: Joi.string().uri().required().error(new Error('Invalid signature supplied')),
  CREATED_AT: Joi.number().required().error(new Error('Invalid createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const management = {
  team: {
    NAME: Joi.string().required().error(new Error('Invalid name supplied')),
    DESCRIPTION: Joi.string().required().error(new Error('Invalid description supplied')),
  },
  users: {
    EMAIL: Joi.string().email().error(new Error('Invalid email supplied')),
    FIRST_NAME: Joi.string().required().error(new Error('Invalid first name supplied')),
    LAST_NAME: Joi.string().required().error(new Error('Invalid last name supplied')),
    PHONE_NUMBER: Joi.string().required().error(new Error('Invalid phone number supplied')),
    POSITION: Joi.string().required().error(new Error('Invalid position supplied')),
    TEAM: Joi.string().required().error(new Error('Invalid team supplied')),
    AUTHORIZATION: Joi.string().required().error(new Error('Invalid authorization supplied')),
  },
};

const company = {
  NAME: Joi.string().required().error(new Error('Invalid name supplied')),
  EMAIL: Joi.string().email().required().error(new Error('Invalid email supplied')),
  FIRST_NAME: Joi.string().required().error(new Error('Invalid first name supplied')),
  LAST_NAME: Joi.string().required().error(new Error('Invalid last name supplied')),
  PHONE: Joi.string().required().error(new Error('Invalid phone number supplied')),
  MOBILE: Joi.string().required().error(new Error('Invalid mobile number supplied')),
  COUNTRY: Joi.string().required().error(new Error('Invalid country supplied')),
  CITY: Joi.string().required().error(new Error('Invalid city supplied')),
  ADDRESS_1: Joi.string().required().error(new Error('Invalid address supplied')),
  ADDRESS_2: Joi.string().required().error(new Error('Invalid address supplied')),
  ADDRESS_3: Joi.string().required().error(new Error('Invalid address supplied')),
  LOGO: Joi.string().uri().required().error(new Error('Invalid logo supplied')),
};

const fooditem = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  NAME: Joi.string().required().error(new Error('Invalid name supplied')),
  BATCH_NUMBER: Joi.string().required().error(new Error('Invalid batch number supplied')),
  DESCRIPTION: Joi.string().required().error(new Error('Invalid description supplied')),
  EXPIRY_DATE: Joi.number().required().error(new Error('Invalid expiry date supplied')),
  ALLERGENS: Joi.object().keys({
    gluten: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    sesameSeeds: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    molluscs: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    fish: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    soybeans: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    peanuts: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    milk: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    sulphurDioxideAndSulphites: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    crustaceans: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    eggs: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    lupin: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    nuts: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    mustard: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
    celery: Joi.boolean().required().error(new Error('Invalid allergen supplied')),
  }),
  CREATED_AT: Joi.number().required().error(new Error('Invalid expiry createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const hotHolding = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FOOD_ITEM: Joi.object().keys({
    id: Joi.number().required().error(new Error('Invalid id supplied to foodItem')),
    displayName: Joi.string().required().error(new Error('Invalid displayName supplied to foodItem')),
  }),
  TEMPERATURE: Joi.number().required().error(new Error('Invalid temperature supplied')),
  USER: Joi.object().keys({
    email: Joi.string().email().error(new Error('Invalid email supplied to user')),
    firstName: Joi.string().required().error(new Error('Invalid firstName supplied to user')),
    lastName: Joi.string().required().error(new Error('Invalid lastName supplied to user')),
  }),
  IMAGE: Joi.string().uri().error(new Error('Invalid image supplied')),
  COMMENTS: Joi.string().error(new Error('Invalid comments supplied')),
  SIGNATURE: Joi.string().uri().required().error(new Error('Invalid signature supplied')),
  CREATED_AT: Joi.number().required().error(new Error('Invalid createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const fastCooling = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FOOD_ITEM: Joi.object().keys({
    id: Joi.number().required().error(new Error('Invalid id supplied to foodItem')),
    displayName: Joi.string().required().error(new Error('Invalid displayName supplied to foodItem')),
  }),
  TEMPERATURE: Joi.number().required().error(new Error('Invalid temperature supplied')),
  USER: Joi.object().keys({
    email: Joi.string().email().error(new Error('Invalid email supplied to user')),
    firstName: Joi.string().required().error(new Error('Invalid firstName supplied to user')),
    lastName: Joi.string().required().error(new Error('Invalid lastName supplied to user')),
  }),
  IMAGE: Joi.string().uri().error(new Error('Invalid image supplied')),
  COMMENTS: Joi.string().error(new Error('Invalid comments supplied')),
  SIGNATURE: Joi.string().uri().required().error(new Error('Invalid signature supplied')),
  CREATED_AT: Joi.number().required().error(new Error('Invalid createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const supplierList = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  NAME: Joi.string().required().error(new Error('Invalid name supplied')),
  ADDRESS: Joi.string().error(new Error('Invalid address supplied')),
  PHONE: Joi.string().error(new Error('Invalid phone number supplied')),
  EMAIL: Joi.string().email().error(new Error('Invalid email supplied')),
  TECH_CONTACT: Joi.string().error(new Error('Invalid tech contact name supplied')),
  SALES_CONTACT: Joi.string().error(new Error('Invalid sales contact name supplied')),
  QUESTIONS: Joi.object().keys({
    q1: Joi.boolean().required().error(new Error('Invalid q1 supplied')),
    q2: Joi.boolean().required().error(new Error('Invalid q2 supplied')),
    q3: Joi.boolean().required().error(new Error('Invalid q3 supplied')),
    q4: Joi.boolean().required().error(new Error('Invalid q4 supplied')),
    q5: Joi.boolean().required().error(new Error('Invalid q5 supplied')),
    q6: Joi.boolean().required().error(new Error('Invalid q6 supplied')),
  }),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const trainingLog = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FROM_DATE: Joi.number().required().error(new Error('Invalid from date supplied')),
  TO_DATE: Joi.number().required().error(new Error('Invalid to date supplied')),
  TRAINING_TYPE: Joi.string().required().error(new Error('Invalid training type supplied')),
  CERTIFICATION: Joi.string().uri().required().error(new Error('Invalid certification supplied')),
  DETAILS: Joi.string().error(new Error('Invalid details section supplied')),
  CREATED_AT: Joi.number().required().error(new Error('Invalid expiry createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const medicalLog = {
  ID: Joi.string().required().error(new Error('Invalid id supplied')),
  FROM_DATE: Joi.number().required().error(new Error('Invalid from date supplied')),
  TO_DATE: Joi.number().required().error(new Error('Invalid to date supplied')),
  ILLNESS_TYPE: Joi.string().required().error(new Error('Invalid training type supplied')),
  CERTIFICATION: Joi.string().uri().required().error(new Error('Invalid certification supplied')),
  DETAILS: Joi.string().error(new Error('Invalid details section supplied')),
  CREATED_AT: Joi.number().required().error(new Error('Invalid expiry createdAt supplied')),
  // TO DO - Update for actual schema
  FROM: Joi.object().keys({
    company: Joi.string().required().error(new Error('Invalid company supplied')),
    id: Joi.string().required().error(new Error('Invalid id supplied')),
    name: Joi.string().required().error(new Error('Invalid name supplied')),
  }),
  LIMIT: Joi.number().error(new Error('Invalid limit supplied')),
  PAGINATED: Joi.boolean().error(new Error('Invalid paginated supplied')),
  ORDER: Joi.string().error(new Error('Invalid order supplied')),
};

const schemas = {
  EMAIL: Joi.string().email().required().error(new Error('Invalid email supplied')),
  PASSWORD: Joi.string().required().error(new Error('Invalid password supplied')),
  SESSION: Joi.string().required().error(new Error('Invalid session supplied')),
  CONFIRMATION_CODE: Joi.string().required().error(new Error('Invalid confirmationCode supplied')),
  REFRESH_TOKEN: Joi.string().required().error(new Error('Invalid refreshToken supplied')),
  fridge,
  fridgeTask,
  fridgeLog,
  freezer,
  freezerTask,
  freezerLog,
  management,
  company,
  fooditem,
  hotHolding,
  fastCooling,
  supplierList,
  trainingLog,
  medicalLog,  
};

module.exports = schemas;
