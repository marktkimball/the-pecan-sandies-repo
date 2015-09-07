var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,

  // facebook: String,
  // twitter: String,
  // google: String,
  // github: String,
  // instagram: String,
  // linkedin: String,
  tokens: Array,

  name: { type: String, default: '' },
  about: { type: String, default: ''},
  location: { type: Object, default: '' },
  hairPrice: { type: Number, default: 0 },
  nailsPrice: { type: Number, default: 0 },
  makeupPrice: { type: Number, default: 0 },
  number: { type: String, default: '' },
  picture: { type: String, default: '' },
  rating: { type: Array, default: ''},
  sundayTimes: { type: Object },
  mondayTimes: { type: Object },
  tuesdayTimes: { type: Object },
  wednesdayTimes: { type: Object },
  thursdayTimes: { type: Object },
  fridayTimes: { type: Object },
  saturdayTimes: { type: Object },
  notifications: { type: Array },
  stylist: {type: Boolean },
  active: {type: Boolean },
  cardInfo: {type: Object, default: '' },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function(size) {
  if (!size) size = 200;
  if (!this.email) return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};

module.exports = mongoose.model('User', userSchema);
