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