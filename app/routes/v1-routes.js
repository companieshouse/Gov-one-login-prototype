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
router.get('/v1/have-id', function (req, res) {
  // Set URl
  res.render('v1/have-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/have-id', function (req, res) {
  if (req.session.data['typeOfId'] === 'yes') {
    res.redirect('/v1/computer-or-tablet')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/post-office')
  }
})


// ******* computer-or-tablet javascript ********************************
router.get('/v1/computer-or-tablet', function (req, res) {
  // Set URl
  res.render('v1/computer-or-tablet', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/computer-or-tablet', function (req, res) {
  if (req.session.data['computerTablet'] === 'yes') {
    res.redirect('/v1/have-a-smartphone')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/which-smartphone')
  }
})


// ******* have-a-smartphone javascript ********************************
router.get('/v1/have-a-smartphone', function (req, res) {
  // Set URl
  res.render('v1/have-a-smartphone', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/have-a-smartphone', function (req, res) {
  if (req.session.data['haveSmartphone'] === 'no')  {
    res.redirect('/v1/have-passport-or-licence')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/valid-passport')
  }
})


// ******* valid-passport javascript ********************************
router.get('/v1/valid-passport', function (req, res) {
  // Set URl
  res.render('v1/valid-passport', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/valid-passport', function (req, res) {
  if (req.session.data['validPassport'] === 'yes')  {
    res.redirect('/v1/passport-symbol')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/residence-permit')
  }
})

// ******* passport-symbol javascript ********************************
router.get('/v1/passport-symbol', function (req, res) {
  // Set URl
  res.render('v1/passport-symbol', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/passport-symbol', function (req, res) {
  if (req.session.data['passportLogo'] === 'yes')  {
    if (req.session.data['haveSmartphone'] === 'iphone')  {
      res.redirect('/v1/iPhoneModel')
    } else {
      res.redirect('/v1/govuk-app')
    }
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/residence-permit')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/v1/iPhoneModel', function (req, res) {
  // Set URl
  res.render('v1/iPhoneModel', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/iPhoneModel', function (req, res) {
  if (req.session.data['iphoneModel'] === '7')  {
    res.redirect('/v1/govuk-app')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/valid-driving-licence')
  }
})


// ******* iPhoneModel javascript ********************************
router.get('/v1/post-office', function (req, res) {
  // Set URl
  res.render('v1/post-office', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/post-office', function (req, res) {
  if (req.session.data['postOfficeId'] === 'yes')  {
    res.redirect('/v1/name-on-id')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/bank-questions')
  }
})


// ******* post-office-id javascript ********************************
router.get('/v1/post-office-id', function (req, res) {
  // Set URl
  res.render('v1/post-office-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/post-office-id', function (req, res) {
  if (req.session.data['postOfficeId'] === 'Passport')  {
    res.redirect('/v1/passport-expire')
  } else if (req.session.data['postOfficeId'] === 'Non-UK Passport')  {
    res.redirect('/v1/does-passport-expire')
  } else if (req.session.data['postOfficeId'] === 'Driving licence')  {
    res.redirect('/v1/driving-expire')
  } else if (req.session.data['postOfficeId'] === 'European driving licence')  {
    res.redirect('/v1/europe-driving-expire')
  } else if (req.session.data['postOfficeId'] === 'idCard')  {
    res.redirect('/v1/eea-id-expire')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/prove-another-way')
  }
})


// ******* does-passport-expire javascript ********************************
router.get('/v1/does-passport-expire', function (req, res) {
  // Set URl
  res.render('v1/does-passport-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/does-passport-expire', function (req, res) {
  if (req.session.data['passportHaveExpiry'] === 'expire')  {
    res.redirect('/v1/passport-expire')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/bank-questions')
  }
})


// ******* passport-expire javascript ********************************
router.get('/v1/passport-expire', function (req, res) {
  // Set URl
  res.render('v1/passport-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/passport-expire', function (req, res) {
  if (req.session.data['postOfficeId'] === 'Non-UK Passport') {
    res.redirect('/v1/select-country')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/find-post-office')
  }
})


// ******* driving-address javascript ********************************
router.get('/v1/driving-address', function (req, res) {
  // Set URl
  res.render('v1/driving-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/driving-address', function (req, res) {
  if (req.session.data['drivingAddress'] === 'yes')  {
    res.redirect('/v1/find-post-office')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/post-office-id')
  }
})


// ******* europe-driving-expire javascript ********************************
router.get('/v1/europe-driving-expire', function (req, res) {
  // Set URl
  res.render('v1/europe-driving-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/europe-driving-expire', function (req, res) {
  if (req.session.data['europeDriveExpiry'] === 'yes')  {
    res.redirect('/v1/europe-driving-expire-date')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/europe-driving-address')
  }
})


// ******* europe-driving-address javascript ********************************
router.get('/v1/europe-driving-address', function (req, res) {
  // Set URl
  res.render('v1/europe-driving-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/europe-driving-address', function (req, res) {
  if (req.session.data['europeDrivingAddress'] === 'yes')  {
    res.redirect('/v1/europe-driving-country')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/europe-driving-address')
  }
})


// ******* eea-id-expire javascript ********************************
router.get('/v1/eea-id-expire', function (req, res) {
  // Set URl
  res.render('v1/eea-id-expire', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/eea-id-expire', function (req, res) {
  if (req.session.data['eeaIdExpiry'] === 'yes')  {
    res.redirect('/v1/eea-id-expire-date')
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/europe-driving-address')
  }
})