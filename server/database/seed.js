require('dotenv-flow').config()

const { Prisma } = require('prisma-binding')
const randomize = require('randomatic')

const db = new Prisma({
  typeDefs: process.env.PRISMA_SCHEMA || 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: process.env.PRISMA_DEBUG,
  secret: process.env.PRISMA_SECRET
})

const usersData = [
  {
    email: 'admin@admin.com',
    password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm', // plaintext password: "nooneknows"
    name: 'admin',
    roles: {
      set: ['ADMIN']
    }
  },
  {
    email: 'user@user.com',
    password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm', // plaintext password: "nooneknows"
    name: 'user',
    roles: {
      set: ['USER']
    }
  },
  {
    email: 'tester@tester.com',
    password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm', // plaintext password: "nooneknows"
    name: 'tester',
    roles: {
      set: ['TESTER']
    }
  }
]

const agentsData = [
  {
    name: 'Default Agent',
    description: 'Default Agent',
    capabilities: {}
  }
]

const apikeysData = [
  {
    name: 'Default Api Key',
    key: randomize('Aa0', 20)
  }
]

const deviceProvidersData = [
  {
    name: 'Local Selenium Server',
    type: 'LOCALSELENIUM'
  },
  {
    name: 'Integrated PhantomJS',
    type: 'INTEGRATED'
  },
  {
    name: 'Saucelabs.com',
    type: 'SAUCELABS',
    url: 'http://ondemand.saucelabs.com:80/wd/hub',
    username: 'YOUR_SAUCELABS_USERNAME',
    password: 'YOUR_SAUCELABS_ACCESS_KEY'
  },
  {
    name: 'Saucelabs.com Real Device Cloud',
    type: 'TESTOBJECTS',
    url: 'https://eu1.appium.testobject.com/wd/hub',
    username: 'YOUR_TESTOBJECTS_USERNAME',
    password: 'YOUR_TESTOBJECTS_PROJECT_API_KEY'
  }
]

const deviceSetsData = [
  {
    name: 'Integrated PhantomJS',
    description: 'Integrated PhantomJS (virtual browser)',
    tags: {
      set: [ 'PhantomJS', 'Integrated' ]
    },
    provider: {
      connect: {
        name: 'Integrated PhantomJS'
      }
    },
    devices: {
      create: [
        {
          name: 'PhantomJS Virtual Browser',
          type: 'DESKTOP',
          capabilities: JSON.stringify({ browserName: 'phantomjs' })
        }
      ]
    }
  },
  {
    name: 'Android Core Devices',
    description: 'Android Core Devices (S8 + Pixel, various versions)',
    tags: {
      set: [ 'Android', 'Saucelabs', 'Simulator' ]
    },
    provider: {
      connect: {
        name: 'Saucelabs.com'
      }
    },
    devices: {
      create: [
        {
          name: 'Samsung Galaxy S8 GoogleAPI Emulator, 7.0',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Chrome","deviceName":"GalaxyS8GoogleAPI","platformName":"Android","platformVersion":"7.0"}'
        },
        {
          name: 'Google Pixel GoogleAPI Emulator, 7.0',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Chrome","deviceName":"PixelGoogleAPI","platformName":"Android","platformVersion":"7.0"}'
        },
        {
          name: 'Samsung Galaxy S4 GoogleAPI Emulator, 4.4',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Chrome","deviceName":"GalaxyS4GoogleAPI","platformName":"Android","platformVersion":"4.4"}'
        },
        {
          name: 'Samsung Galaxy S6 GoogleAPI Emulator, 7.0',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Chrome","deviceName":"GalaxyS6GoogleAPI","platformName":"Android","platformVersion":"7.0"}'
        },
        {
          name: 'Google Pixel GoogleAPI Emulator, 7.1',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Chrome","deviceName":"PixelGoogleAPI","platformName":"Android","platformVersion":"7.1"}'
        }
      ]
    }
  },
  {
    name: 'iOS Core Devices',
    description: 'iOS Core Devices (X, 7 Plus, SE)',
    tags: {
      set: [ 'iOS', 'Saucelabs', 'Simulator' ]
    },
    provider: {
      connect: {
        name: 'Saucelabs.com'
      }
    },
    devices: {
      create: [
        {
          name: 'iPhone X Simulator, 11.3',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Safari","deviceName":"iPhone X","platformName":"iOS","platformVersion":"11.3"}'
        },
        {
          name: 'iPhone 7 Plus Simulator, 10.0',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Safari","deviceName":"iPhone 7 Plus","platformName":"iOS","platformVersion":"10.0"}'
        },
        {
          name: 'iPhone SE Simulator, 10.0',
          type: 'MOBILEBROWSER',
          capabilities: '{"browserName":"Safari","deviceName":"iPhone SE","platformName":"iOS","platformVersion":"10.0"}'
        }
      ]
    }
  },
  {
    name: 'Latest Chrome on Desktop',
    description: 'Latest Chrome on Windows 10, Mac and Linux',
    tags: {
      set: [ 'Chrome', 'Saucelabs' ]
    },
    provider: {
      connect: {
        name: 'Saucelabs.com'
      }
    },
    devices: {
      create: [
        {
          name: 'Google Chrome 48, Linux',
          type: 'DESKTOP',
          capabilities: '{"browserName":"chrome","platform":"Linux","version":"48"}'
        },
        {
          name: 'Google Chrome 69, Mac 10.10',
          type: 'DESKTOP',
          capabilities: '{"browserName":"chrome","platform":"Mac 10.10","version":"69"}'
        },
        {
          name: 'Google Chrome 69, Windows 10',
          type: 'DESKTOP',
          capabilities: '{"browserName":"chrome","platform":"Windows 10","version":"69"}'
        }
      ]
    }
  },
  {
    name: 'Latest Firefox on Desktop',
    description: 'Latest Firefox (62 on Mac and Win10, 45 on Linux)',
    tags: {
      set: [ 'Firefox', 'Saucelabs' ]
    },
    provider: {
      connect: {
        name: 'Saucelabs.com'
      }
    },
    devices: {
      create: [
        {
          name: 'Firefox 62, Mac 10.11',
          type: 'DESKTOP',
          capabilities: '{"browserName":"firefox","platform":"Mac 10.11","version":"62"}'
        },
        {
          name: 'Firefox 62, Windows 10',
          type: 'DESKTOP',
          capabilities: '{"browserName":"firefox","platform":"Windows 10","version":"62"}'
        },
        {
          name: 'Firefox 45, Linux',
          type: 'DESKTOP',
          capabilities: '{"browserName":"firefox","platform":"Linux","version":"45"}'
        }
      ]
    }
  },
  {
    name: 'Real Devices - iPhone Core Devices',
    description: 'iPhone Core Devices on Saucelabs.com Real Device Cloud',
    tags: {
      set: [ 'iOS', 'Saucelabs', 'RealDevices' ]
    },
    provider: {
      connect: {
        name: 'Saucelabs.com Real Device Cloud'
      }
    },
    devices: {
      create: [
        {
          'name': 'iPhone SE, IOS, 11.4.1',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"iPhone SE","platformName":"IOS","platformVersion":"11.4.1"}'
        },
        {
          'name': 'iPhone 6S Plus, IOS, 11.4.1',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"iPhone 6S Plus","platformName":"IOS","platformVersion":"11.4.1"}'
        },
        {
          'name': 'iPhone 8, IOS, 12.1.2',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"iPhone 8","platformName":"IOS","platformVersion":"12.1.2"}'
        },
        {
          'name': 'iPhone X, IOS, 12.1.2',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"iPhone X","platformName":"IOS","platformVersion":"12.1.2"}'
        },
        {
          'name': 'iPhone XS Max, IOS, 12.1.2',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"iPhone XS Max","platformName":"IOS","platformVersion":"12.1.2"}'
        }
      ]
    }
  },
  {
    name: 'Real Devices - Android Core Devices',
    description: 'Android Core Devices on Saucelabs.com Real Device Cloud',
    tags: {
      set: [ 'Android', 'Saucelabs', 'RealDevices' ]
    },
    provider: {
      connect: {
        name: 'Saucelabs.com Real Device Cloud'
      }
    },
    devices: {
      create: [
        {
          'name': 'Samsung Galaxy S8, ANDROID, 8.0.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Samsung Galaxy S8","platformName":"ANDROID","platformVersion":"8.0.0"}'
        },
        {
          'name': 'Samsung Galaxy S6 Edge, ANDROID, 7.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Samsung Galaxy S6 Edge","platformName":"ANDROID","platformVersion":"7.0"}'
        },
        {
          'name': 'Samsung Galaxy A5 (2017), ANDROID, 8.0.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Samsung Galaxy A5 (2017)","platformName":"ANDROID","platformVersion":"8.0.0"}'
        },
        {
          'name': 'Google Pixel 2, ANDROID, 9',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Google Pixel 2","platformName":"ANDROID","platformVersion":"9"}'
        },
        {
          'name': 'Motorola Moto E (2nd gen), ANDROID, 6.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Motorola Moto E (2nd gen)","platformName":"ANDROID","platformVersion":"6.0"}'
        },
        {
          'name': 'Motorola Moto X (2nd gen), ANDROID, 6.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Motorola Moto X (2nd gen)","platformName":"ANDROID","platformVersion":"6.0"}'
        },
        {
          'name': 'Huawei P10, ANDROID, 7.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Huawei P10","platformName":"ANDROID","platformVersion":"7.0"}'
        },
        {
          'name': 'Huawei Mate 10 Pro, ANDROID, 8.0.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Huawei Mate 10 Pro","platformName":"ANDROID","platformVersion":"8.0.0"}'
        },
        {
          'name': 'Huawei P8 Lite 2017, ANDROID, 7.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Huawei P8 Lite 2017","platformName":"ANDROID","platformVersion":"7.0"}'
        },
        {
          'name': 'Sony Xperia XA, ANDROID, 7.0',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"Sony Xperia XA","platformName":"ANDROID","platformVersion":"7.0"}'
        },
        {
          'name': 'HTC One, ANDROID, 5.0.2',
          'type': 'MOBILEAPP',
          'capabilities': '{"deviceName":"HTC One","platformName":"ANDROID","platformVersion":"5.0.2"}'
        }
      ]
    }
  }
]

const chatbotsData = [
  {
    name: 'Echo Bot',
    description: "Chatbot simulator for evaluating Botium and Botium Box features. Sample commands: 'buttons', 'show me buttons', 'picture', 'show me a picture', 'card', 'show me a card'. Otherwise the input is echoed back.",
    tags: {
      set: [ 'Demo' ]
    },
    capabilities: {
      create: [
        {
          name: 'CONTAINERMODE',
          type: 'STRING',
          stringValue: 'echo'
        }
      ]
    }
  },
  {
    name: 'I am Botium',
    description: 'A simple smalltalk chatbot for evaluating Botium and Botium Box features.',
    tags: {
      set: [ 'Demo' ]
    },
    capabilities: {
      create: [
        {
          name: 'CONTAINERMODE',
          type: 'STRING',
          stringValue: 'simplerest'
        },
        {
          name: 'SIMPLEREST_URL',
          type: 'STRING',
          stringValue: 'http://ec2-63-32-190-175.eu-west-1.compute.amazonaws.com:3002/reply'
        },
        {
          name: 'SIMPLEREST_METHOD',
          type: 'STRING',
          stringValue: 'POST'
        },
        {
          name: 'SIMPLEREST_RESPONSE_JSONPATH',
          type: 'STRING',
          stringValue: '$.reply'
        },
        {
          name: 'SIMPLEREST_BODY_TEMPLATE',
          type: 'JSON',
          jsonValue: '{ "username": "botium", "message": "{{msg.messageText}}" }'
        }
      ]
    }
  }
]

const testsetData = [
  {
    name: 'Echo Sample',
    description: 'Just some basic sample scripts',
    tags: {
      set: [ 'Demo' ]
    },
    expandConvos: true,
    expandUtterancesToConvos: false,
    scripts: {
      create: [
        {
          name: 'give me picture',
          scriptType: 'SCRIPTING_TYPE_CONVO',
          script: 'give me picture\n\n#me\nHello, Bot!\n\n#bot\nYou said: Hello, Bot!\n\n#me\ngive me a picture\n\n#bot\nHere is a picture\nMEDIA http://www.botium.at/img/logo.png\n'
        },
        {
          name: 'give me buttons',
          scriptType: 'SCRIPTING_TYPE_CONVO',
          script: 'give me buttons\n\n#me\nHi Bot!\n\n#bot\nYou said: Hi Bot!\n\n#me\ngive me buttons\n\n#bot\nHere are some buttons\nBUTTONS First Button|Second Button\n'
        }
      ]
    }
  },
  {
    name: 'Smalltalk (EN)',
    description: 'Common Smalltalk Testset (how are you ? what is your name ? ...)',
    tags: {
      set: [ 'Demo' ]
    },
    expandConvos: false,
    expandUtterancesToConvos: true,
    expandUtterancesIncomprehension: 'INCOMPREHENSION',
    repositories: {
      create: [
        {
          name: 'Botium Utterances - Smalltalk',
          giturl: 'https://github.com/codeforequity-at/botium-utterances.git',
          gitbranch: 'master',
          gitdir: 'convos/smalltalk',
          globFilter: '**/*.en.utterances.txt'
        },
        {
          name: 'Botium Utterances - Shared',
          giturl: 'https://github.com/codeforequity-at/botium-utterances.git',
          gitbranch: 'master',
          gitdir: 'shared',
          globFilter: 'INCOMPREHENSION.en.utterances.txt'
        }
      ]
    }
  },
  {
    name: 'I am Botium (Smalltalk)',
    description: 'I am Botium Smalltalk Testset (how are you ? what is your name ? ...)',
    tags: {
      set: [ 'Demo' ]
    },
    expandConvos: false,
    expandUtterancesToConvos: true,
    expandUtterancesIncomprehension: 'INCOMPREHENSION',
    repositories: {
      create: [
        {
          name: 'Botium Utterances - Smalltalk',
          giturl: 'https://github.com/codeforequity-at/botium-utterances.git',
          gitbranch: 'master',
          gitdir: 'convos/smalltalk',
          globFilter: '**/*.en.utterances.txt'
        }
      ]
    },
    scripts: {
      create: [
        {
          name: 'INCOMPREHENSION',
          scriptType: 'SCRIPTING_TYPE_UTTERANCES',
          script: 'INCOMPREHENSION\nlol\nokay\nso...\ngo on\numm\ninteresting\nreally?\n'
        }
      ]
    }
  }
]

const testProjectData = [
  {
    name: 'Echo Bot - Test Suite',
    description: 'Test Suite for Echo chatbot',
    code: 'Echo-Bot-Test-Suite',
    tags: {
      set: [ 'Demo' ]
    },
    batchCount: 3,
    chatbot: {
      connect: {
        name: 'Echo Bot'
      }
    },
    testSets: {
      connect: [
        {
          name: 'Echo Sample'
        }
      ]
    }
  },
  {
    name: 'I am Botium - Test Suite',
    description: 'Test Suite for I am Botium chatbot',
    code: 'I-am-Botium-Test-Suite',
    tags: {
      set: [ 'Demo' ]
    },
    batchCount: 3,
    chatbot: {
      connect: {
        name: 'I am Botium'
      }
    },
    testSets: {
      connect: [
        {
          name: 'I am Botium (Smalltalk)'
        }
      ]
    }
  }
]

const settingsData = [
  {
    cleanupJobIntervalMinutes: 30,
    keepTestCaseSuccessScreenshotsDays: 10,
    keepTestCaseSuccessConversationDays: 10,
    keepTestCaseFailedScreenshotsDays: 60,
    keepTestCaseFailedConversationDays: 60
  }
]

async function createRecords (entityName, entities, queryFn, keyField, createFn) {
  let createdCount = 0
  for (const entityData of entities) {
    const query = { }
    if (keyField) {
      query.where = { [keyField]: entityData[keyField] }
    }
    const existingEntity = await queryFn(query)
    if (existingEntity && existingEntity.length > 0) {
      console.log(entityName + ' ' + (keyField && entityData[keyField]) + ' already existing, skipping.')
    } else {
      console.log('creating ' + entityName + ' ' + (keyField && entityData[keyField]))
      try {
        await createFn({ data: entityData })
        createdCount++
      } catch (err) {
        console.log('Error creating ' + entityName + ': ', err)
      }
    }
  }
  console.log('Created ' + createdCount + ' ' + entityName + '(s)')
}

(async () => {
  await createRecords('user', usersData, db.query.users, 'name', db.mutation.createUser)
  await createRecords('agent', agentsData, db.query.agents, 'name', db.mutation.createAgent)
  await createRecords('apikey', apikeysData, db.query.apiKeys, 'name', db.mutation.createApiKey)
  await createRecords('deviceprovider', deviceProvidersData, db.query.deviceProviders, 'name', db.mutation.createDeviceProvider)
  await createRecords('deviceset', deviceSetsData, db.query.deviceSets, 'name', db.mutation.createDeviceSet)
  await createRecords('chatbot', chatbotsData, db.query.chatbots, 'name', db.mutation.createChatbot)
  await createRecords('testset', testsetData, db.query.testSets, 'name', db.mutation.createTestSet)
  await createRecords('testproject', testProjectData, db.query.testProjects, 'name', db.mutation.createTestProject)
  await createRecords('settings', settingsData, db.query.systemSettingses, null, db.mutation.createSystemSettings)
})()
