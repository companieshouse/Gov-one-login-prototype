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

// ******* sle-of-mann javascript ********************************
router.get('/altroutes-v1/isle-of-man', function (req, res) {
  // Set URl
  res.render('altroutes-v1/isle-of-man', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/isle-of-man', function (req, res) {
  if (req.session.data['isleOfMan'] === 'yes') {
    res.redirect('/altroutes-v1/have-id')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/use-gov-app')
  }
})


// ******* use-gov-app javascript ********************************
router.get('/altroutes-v1/use-gov-appn', function (req, res) {
  // Set URl
  res.render('altroutes-v1/use-gov-app', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/use-gov-app', function (req, res) {
  if (req.session.data['useGovApp'] === 'app') {
    res.redirect('/altroutes-v1/computer-or-tablet')
  } else {
    res.redirect('https://prove-your-identity-prototype.herokuapp.com/alt-routes-v1/post-one-login/alt-route-start')
  }
})

// ******* need-replacement-address javascript ********************************
router.get('/altroutes-v1/have-id', function (req, res) {
  // Set URl
  res.render('altroutes-v1/have-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/have-id', function (req, res) {
  if (req.session.data['typeOfId'] === 'yes') {
    res.redirect('/altroutes-v1/computer-or-tablet')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/post-office')
  }
})


// ******* computer-or-tablet javascript ********************************
router.get('/altroutes-v1/computer-or-tablet', function (req, res) {
  // Set URl
  res.render('altroutes-v1/computer-or-tablet', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/computer-or-tablet', function (req, res) {
  if (req.session.data['computerTablet'] === 'yes') {
    res.redirect('/altroutes-v1/have-a-smartphone')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/which-smartphone')
  }
})

// ******* which-smartphone javascript ********************************
router.get('/altroutes-v1/which-smartphone', function (req, res) {
  // Set URl
  res.render('altroutes-v1/which-smartphone', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/which-smartphone', function (req, res) {
  if (req.session.data['whichSmartphone'] === 'no') {
    res.redirect('/altroutes-v1/have-passport-or-licence')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/valid-passport')
  }
})


// ******* have-a-smartphone javascript ********************************
router.get('/altroutes-v1/have-a-smartphone', function (req, res) {
  // Set URl
  res.render('altroutes-v1/have-a-smartphone', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/have-a-smartphone', function (req, res) {
  if (req.session.data['haveSmartphone'] === 'no')  {
    res.redirect('/altroutes-v1/have-passport-or-licence')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/valid-passport')
  }
})


// ******* valid-passport javascript ********************************
router.get('/altroutes-v1/valid-passport', function (req, res) {
  // Set URl
  res.render('altroutes-v1/valid-passport', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/valid-passport', function (req, res) {
  if (req.session.data['validPassport'] === 'yes')  {
    res.redirect('/altroutes-v1/passport-symbol')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/residence-permit')
  }
})

// ******* residence-permit javascript ********************************
router.get('/altroutes-v1/residence-permit', function (req, res) {
  // Set URl
  res.render('altroutes-v1/residence-permit', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/residence-permit', function (req, res) {
  if (req.session.data['residencePermit'] === 'no')  {
    res.redirect('/altroutes-v1/valid-driving-licence')
  } else {
    if (req.session.data['haveSmartphone'] === 'iphone')  {
      res.redirect('/altroutes-v1/iphoneModel2')
    } else if (req.session.data['haveSmartphone'] === 'android')  {
      res.redirect('/altroutes-v1/govuk-app-brp')
    }
  }
})

// ******* passport-symbol javascript ********************************
router.get('/altroutes-v1/passport-symbol', function (req, res) {
  // Set URl
  res.render('altroutes-v1/passport-symbol', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/passport-symbol', function (req, res) {
  if (req.session.data['passportLogo'] === 'yes')  {
    if (req.session.data['haveSmartphone'] === 'iphone')  {
      res.redirect('/altroutes-v1/iPhoneModel')
    } else {
      res.redirect('/altroutes-v1/govuk-app')
    }
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/residence-permit')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/altroutes-v1/iPhoneModel', function (req, res) {
  // Set URl
  res.render('altroutes-v1/iPhoneModel', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/iPhoneModel', function (req, res) {
  if (req.session.data['iphoneModel'] === '7')  {
    res.redirect('/altroutes-v1/govuk-app')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/valid-driving-licence')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/altroutes-v1/iPhoneModel2', function (req, res) {
  // Set URl
  res.render('altroutes-v1/iPhoneModel2', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/iPhoneModel2', function (req, res) {
  if (req.session.data['iphoneModel'] === '7')  {
    res.redirect('/altroutes-v1/govuk-app-brp')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/valid-driving-licence')
  }
})

// ******* valid-driving-licence javascript ********************************
router.get('/altroutes-v1/valid-driving-licence', function (req, res) {
  // Set URl
  res.render('altroutes-v1/valid-driving-licence', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/valid-driving-licence', function (req, res) {
  if (req.session.data['validDrivingLicence'] === 'yes')  {
    res.redirect('/altroutes-v1/govuk-app-driving')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/have-passport-or-licence')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/altroutes-v1/post-office', function (req, res) {
  // Set URl
  res.render('altroutes-v1/post-office', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/post-office', function (req, res) {
  if (req.session.data['postOfficeId'] === 'yes')  {
    res.redirect('/altroutes-v1/name-on-id')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/bank-questions')
  }
})


// ******* post-office-id javascript ********************************
router.get('/altroutes-v1/post-office-id', function (req, res) {
  // Set URl
  res.render('altroutes-v1/post-office-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/post-office-id', function (req, res) {
  if (req.session.data['postOfficeId'] === 'Passport')  {
    res.redirect('/altroutes-v1/passport-expire')
  } else if (req.session.data['postOfficeId'] === 'Non-UK Passport')  {
    res.redirect('/altroutes-v1/does-passport-expire')
  } else if (req.session.data['postOfficeId'] === 'Driving licence')  {
    res.redirect('/altroutes-v1/driving-expire')
  } else if (req.session.data['postOfficeId'] === 'European driving licence')  {
    res.redirect('/altroutes-v1/europe-driving-expire')
  } else if (req.session.data['postOfficeId'] === 'idCard')  {
    res.redirect('/altroutes-v1/eea-id-expire')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/prove-another-way')
  }
})


// ******* does-passport-expire javascript ********************************
router.get('/altroutes-v1/does-passport-expire', function (req, res) {
  // Set URl
  res.render('altroutes-v1/does-passport-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/does-passport-expire', function (req, res) {
  if (req.session.data['passportHaveExpiry'] === 'expire')  {
    res.redirect('/altroutes-v1/passport-expire')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/bank-questions')
  }
})


// ******* passport-expire javascript ********************************
router.get('/altroutes-v1/passport-expire', function (req, res) {
  // Set URl
  res.render('altroutes-v1/passport-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/passport-expire', function (req, res) {
  if (req.session.data['postOfficeId'] === 'Non-UK Passport') {
    res.redirect('/altroutes-v1/select-country')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/find-post-office')
  }
})


// ******* driving-address javascript ********************************
router.get('/altroutes-v1/driving-address', function (req, res) {
  // Set URl
  res.render('altroutes-v1/driving-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/driving-address', function (req, res) {
  if (req.session.data['drivingAddress'] === 'yes')  {
    res.redirect('/altroutes-v1/find-post-office')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/post-office-id')
  }
})


// ******* europe-driving-expire javascript ********************************
router.get('/altroutes-v1/europe-driving-expire', function (req, res) {
  // Set URl
  res.render('altroutes-v1/europe-driving-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/europe-driving-expire', function (req, res) {
  if (req.session.data['europeDriveExpiry'] === 'yes')  {
    res.redirect('/altroutes-v1/europe-driving-expire-date')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/europe-driving-address')
  }
})


// ******* europe-driving-address javascript ********************************
router.get('/altroutes-v1/europe-driving-address', function (req, res) {
  // Set URl
  res.render('altroutes-v1/europe-driving-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/europe-driving-address', function (req, res) {
  if (req.session.data['europeDrivingAddress'] === 'yes')  {
    res.redirect('/altroutes-v1/europe-driving-country')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/europe-driving-address')
  }
})


// ******* eea-id-expire javascript ********************************
router.get('/altroutes-v1/eea-id-expire', function (req, res) {
  // Set URl
  res.render('altroutes-v1/eea-id-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/eea-id-expire', function (req, res) {
  if (req.session.data['eeaIdExpiry'] === 'yes')  {
    res.redirect('/altroutes-v1/eea-id-expire-date')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/eea-id-address')
  }
})


// ******* eea-id-address javascript ********************************
router.get('/altroutes-v1/eea-id-address', function (req, res) {
  // Set URl
  res.render('altroutes-v1/eea-id-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/eea-id-address', function (req, res) {
  if (req.session.data['eeaIdAddress'] === 'no')  {
    res.redirect('/altroutes-v1/post-office-id')
  } else {
    res.redirect('/altroutes-v1/eea-id-country')
  } 
})


// ******* bank-questions javascript ********************************
router.get('/altroutes-v1/bank-questions', function (req, res) {
  // Set URl
  res.render('altroutes-v1/bank-questions', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/bank-questions', function (req, res) {
  if (req.session.data['bankQuestions'] === 'yes')  {
    res.redirect('/altroutes-v1/bank-name')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/find-another-way')
  }
})


// ******* dob javascript ********************************
router.get('/altroutes-v1/dob', function (req, res) {
  // Set URl
  res.render('altroutes-v1/dob', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/dob', function (req, res) {
  if (req.session.data['bankQuestions'] === 'yes')  {
    res.redirect('/altroutes-v1/confirm-details-bank')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/confirm-details')
  }
})


// ******* we-need-to-check javascript ********************************
router.get('/altroutes-v1/we-need-to-check', function (req, res) {
  // Set URl
  res.render('altroutes-v1/we-need-to-check', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/we-need-to-check', function (req, res) {
  if (req.session.data['success'] === 'yes')  {
    res.redirect('/altroutes-v1/go-to-service')
  } else if (req.session.data['bankQuestions'] === 'yes')  {
    res.redirect('/altroutes-v1/Answer-security-questions')
  } else {
    // User inputted value so move to next page
    res.redirect('/altroutes-v1/how-to-post-office')
  }
})


// ******* find-another-way javascript ********************************
router.get('/altroutes-v1/find-another-way', function (req, res) {
  // Set URl
  res.render('altroutes-v1/find-another-way', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/find-another-way', function (req, res) {
  if (req.session.data['anotherWay'] === 'useID')  {
    res.redirect('/altroutes-v1/have-id')
  } else if (req.session.data['anotherWay'] === 'useBankDetails')  {
    res.redirect('/altroutes-v1/bank-questions')
  }
})


// ******* successfully-matched javascript ********************************
router.get('/altroutes-v1/successfully-matched', function (req, res) {
  // Set URl
  res.render('altroutes-v1/successfully-matched', {
    currentUrl: req.originalUrl
  })
})

router.post('/altroutes-v1/successfully-matched', function (req, res) {
  res.redirect('/altroutes-v1/find-address')
})