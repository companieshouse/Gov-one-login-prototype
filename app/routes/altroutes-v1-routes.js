const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


module.exports=router;

// Show session data and URLs in the terminal  
router.use((req, res, next) => {  
  const log = {  
    method: req.method,  
    url: req.originalUrl,  
    data: req.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
  next()  
}) 


// ******* need-replacement-address javascript ********************************
router.get('/v2/have-id', function (req, res) {
  // Set URl
  res.render('v2/have-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/have-id', function (req, res) {
  if (req.session.data['typeOfId'] === 'yes') {
    res.redirect('/v2/computer-or-tablet')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/post-office')
  }
})


// ******* computer-or-tablet javascript ********************************
router.get('/v2/computer-or-tablet', function (req, res) {
  // Set URl
  res.render('v2/computer-or-tablet', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/computer-or-tablet', function (req, res) {
  if (req.session.data['computerTablet'] === 'yes') {
    res.redirect('/v2/have-a-smartphone')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/which-smartphone')
  }
})

// ******* which-smartphone javascript ********************************
router.get('/v2/which-smartphone', function (req, res) {
  // Set URl
  res.render('v2/which-smartphone', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/which-smartphone', function (req, res) {
  if (req.session.data['whichSmartphone'] === 'no') {
    res.redirect('/v2/have-passport-or-licence')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/valid-passport')
  }
})


// ******* have-a-smartphone javascript ********************************
router.get('/v2/have-a-smartphone', function (req, res) {
  // Set URl
  res.render('v2/have-a-smartphone', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/have-a-smartphone', function (req, res) {
  if (req.session.data['haveSmartphone'] === 'no')  {
    res.redirect('/v2/have-passport-or-licence')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/valid-passport')
  }
})


// ******* valid-passport javascript ********************************
router.get('/v2/valid-passport', function (req, res) {
  // Set URl
  res.render('v2/valid-passport', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/valid-passport', function (req, res) {
  if (req.session.data['validPassport'] === 'yes')  {
    res.redirect('/v2/passport-symbol')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/residence-permit')
  }
})

// ******* residence-permit javascript ********************************
router.get('/v2/residence-permit', function (req, res) {
  // Set URl
  res.render('v2/residence-permit', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/residence-permit', function (req, res) {
  if (req.session.data['residencePermit'] === 'no')  {
    res.redirect('/v2/valid-driving-licence')
  } else {
    if (req.session.data['haveSmartphone'] === 'iphone')  {
      res.redirect('/v2/iphoneModel2')
    } else if (req.session.data['haveSmartphone'] === 'android')  {
      res.redirect('/v2/govuk-app-brp')
    }
  }
})

// ******* passport-symbol javascript ********************************
router.get('/v2/passport-symbol', function (req, res) {
  // Set URl
  res.render('v2/passport-symbol', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/passport-symbol', function (req, res) {
  if (req.session.data['passportLogo'] === 'yes')  {
    if (req.session.data['haveSmartphone'] === 'iphone')  {
      res.redirect('/v2/iPhoneModel')
    } else {
      res.redirect('/v2/govuk-app')
    }
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/residence-permit')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/v2/iPhoneModel', function (req, res) {
  // Set URl
  res.render('v2/iPhoneModel', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/iPhoneModel', function (req, res) {
  if (req.session.data['iphoneModel'] === '7')  {
    res.redirect('/v2/govuk-app')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/valid-driving-licence')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/v2/iPhoneModel2', function (req, res) {
  // Set URl
  res.render('v2/iPhoneModel2', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/iPhoneModel2', function (req, res) {
  if (req.session.data['iphoneModel'] === '7')  {
    res.redirect('/v2/govuk-app-brp')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/valid-driving-licence')
  }
})

// ******* valid-driving-licence javascript ********************************
router.get('/v2/valid-driving-licence', function (req, res) {
  // Set URl
  res.render('v2/valid-driving-licence', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/valid-driving-licence', function (req, res) {
  if (req.session.data['validDrivingLicence'] === 'yes')  {
    res.redirect('/v2/govuk-app-driving')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/have-passport-or-licence')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/v2/post-office', function (req, res) {
  // Set URl
  res.render('v2/post-office', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/post-office', function (req, res) {
  if (req.session.data['postOfficeId'] === 'yes')  {
    res.redirect('/v2/name-on-id')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/bank-questions')
  }
})


// ******* post-office-id javascript ********************************
router.get('/v2/post-office-id', function (req, res) {
  // Set URl
  res.render('v2/post-office-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/post-office-id', function (req, res) {
  if (req.session.data['postOfficeId'] === 'Passport')  {
    res.redirect('/v2/passport-expire')
  } else if (req.session.data['postOfficeId'] === 'Non-UK Passport')  {
    res.redirect('/v2/does-passport-expire')
  } else if (req.session.data['postOfficeId'] === 'Driving licence')  {
    res.redirect('/v2/driving-expire')
  } else if (req.session.data['postOfficeId'] === 'European driving licence')  {
    res.redirect('/v2/europe-driving-expire')
  } else if (req.session.data['postOfficeId'] === 'idCard')  {
    res.redirect('/v2/eea-id-expire')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/prove-another-way')
  }
})


// ******* does-passport-expire javascript ********************************
router.get('/v2/does-passport-expire', function (req, res) {
  // Set URl
  res.render('v2/does-passport-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/does-passport-expire', function (req, res) {
  if (req.session.data['passportHaveExpiry'] === 'expire')  {
    res.redirect('/v2/passport-expire')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/bank-questions')
  }
})


// ******* passport-expire javascript ********************************
router.get('/v2/passport-expire', function (req, res) {
  // Set URl
  res.render('v2/passport-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/passport-expire', function (req, res) {
  if (req.session.data['postOfficeId'] === 'Non-UK Passport') {
    res.redirect('/v2/select-country')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/find-post-office')
  }
})


// ******* driving-address javascript ********************************
router.get('/v2/driving-address', function (req, res) {
  // Set URl
  res.render('v2/driving-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/driving-address', function (req, res) {
  if (req.session.data['drivingAddress'] === 'yes')  {
    res.redirect('/v2/find-post-office')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/post-office-id')
  }
})


// ******* europe-driving-expire javascript ********************************
router.get('/v2/europe-driving-expire', function (req, res) {
  // Set URl
  res.render('v2/europe-driving-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/europe-driving-expire', function (req, res) {
  if (req.session.data['europeDriveExpiry'] === 'yes')  {
    res.redirect('/v2/europe-driving-expire-date')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/europe-driving-address')
  }
})


// ******* europe-driving-address javascript ********************************
router.get('/v2/europe-driving-address', function (req, res) {
  // Set URl
  res.render('v2/europe-driving-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/europe-driving-address', function (req, res) {
  if (req.session.data['europeDrivingAddress'] === 'yes')  {
    res.redirect('/v2/europe-driving-country')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/europe-driving-address')
  }
})


// ******* eea-id-expire javascript ********************************
router.get('/v2/eea-id-expire', function (req, res) {
  // Set URl
  res.render('v2/eea-id-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/eea-id-expire', function (req, res) {
  if (req.session.data['eeaIdExpiry'] === 'yes')  {
    res.redirect('/v2/eea-id-expire-date')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/eea-id-address')
  }
})


// ******* eea-id-address javascript ********************************
router.get('/v2/eea-id-address', function (req, res) {
  // Set URl
  res.render('v2/eea-id-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/eea-id-address', function (req, res) {
  if (req.session.data['eeaIdAddress'] === 'no')  {
    res.redirect('/v2/post-office-id')
  } else {
    res.redirect('/v2/eea-id-country')
  } 
})


// ******* bank-questions javascript ********************************
router.get('/v2/bank-questions', function (req, res) {
  // Set URl
  res.render('v2/bank-questions', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/bank-questions', function (req, res) {
  if (req.session.data['bankQuestions'] === 'yes')  {
    res.redirect('/v2/bank-name')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/find-another-way')
  }
})


// ******* dob javascript ********************************
router.get('/v2/dob', function (req, res) {
  // Set URl
  res.render('v2/dob', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/dob', function (req, res) {
  if (req.session.data['bankQuestions'] === 'yes')  {
    res.redirect('/v2/confirm-details-bank')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/confirm-details')
  }
})


// ******* we-need-to-check javascript ********************************
router.get('/v2/we-need-to-check', function (req, res) {
  // Set URl
  res.render('v2/we-need-to-check', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/we-need-to-check', function (req, res) {
  if (req.session.data['success'] === 'yes')  {
    res.redirect('/v2/go-to-service')
  } else if (req.session.data['bankQuestions'] === 'yes')  {
    res.redirect('/v2/Answer-security-questions')
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/how-to-post-office')
  }
})


// ******* find-another-way javascript ********************************
router.get('/v2/find-another-way', function (req, res) {
  // Set URl
  res.render('v2/find-another-way', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/find-another-way', function (req, res) {
  if (req.session.data['anotherWay'] === 'useID')  {
    res.redirect('/v2/have-id')
  } else if (req.session.data['anotherWay'] === 'useBankDetails')  {
    res.redirect('/v2/bank-questions')
  } else if (req.session.data['anotherWay'] === 'GoToService')  {
    res.redirect('https://ch-account-webfiling-prototype-7225a59d1c82.herokuapp.com/migration-1/One-login-return')
  }
})


// ******* successfully-matched javascript ********************************
router.get('/v2/successfully-matched', function (req, res) {
  // Set URl
  res.render('v2/successfully-matched', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/successfully-matched', function (req, res) {
  res.redirect('/v2/find-address')
})