/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict'

module.exports = {
	create: function(req, res) {
        let username = req.param('username');
        let password = req.param('password');
        
        UserService.create({
            username: username,
            password: password,
        }, res);
    },
    
    find: function (req, res) {
        let userId = req.user;
        
        UserService.find({
            req: req,
            userId: userId,
        }, res);
    },
    
    findOne: function (req, res) {
        res.notImplement();
    },
    
    update: function (req, res) {
        let userId = req.user;
        let nickname = req.param('nickname');
        let avatar = req.param('avatar');
        
        UserService.update({
            userId: userId,
            nickname: nickname,
            avatar: avatar,
        }, res);
    },
    
    destroy: function (req, res) {
        res.notImplement();
    }
};

