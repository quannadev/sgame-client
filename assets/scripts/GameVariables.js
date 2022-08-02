let GameVariables = {};
GameVariables.Poker = {};
GameVariables.Poker.getChip = function(user){
    if(!(user instanceof SmartFoxSDK.SmartFox.Entities.User))
        return 0;
    if(user && user.getVariable("chip"))
        return user.getVariable("chip").value;
    return 0;
}
GameVariables.Poker.getDisplayName = function(user){
    if(!(user instanceof SmartFoxSDK.SmartFox.Entities.User))
        return "";
    if(user && user.getVariable("dn"))
        return user.getVariable("dn").value;
    return "";
}
GameVariables.Poker.getBetChip = function(room){
    return room.getVariable("bet_chip").value;
}
GameVariables.Poker.getMinBuyIn = function(room){
    return room.getVariable("min_chip").value;
}
GameVariables.Poker.getMaxBuyIn = function(room){
    return room.getVariable("max_chip").value;
}
GameVariables.Poker.getNumberDesk = function(room){
    return room.getVariable("number_desk").value;
}
GameVariables.getBetChip = function(room){
    return room.getVariable("bet_chip").value;
}
GameVariables.getChip = function(user){
    if(!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return 0;
    if(user && user.getVariable("chip"))
        return user.getVariable("chip").value;
    return 0;
}
GameVariables.getDisplayName = function(user){
    if(!(user instanceof SmartFoxSDK.SmartFox.Entities.User))
        return "";
    if(user && user.getVariable("dn"))
        return user.getVariable("dn").value;
    return "";
}
GameVariables.getAccount = function(user){
    if(!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return "....";
    if(user && user.getVariable("ac"))
        return user.getVariable("ac").value;
    return "....";
}
GameVariables.setChip = function(chip, user){
    if(chip && user instanceof SmartFoxSDK.SmartFox.Entities.User){
        let uv = new SmartFoxSDK.SmartFox.Entities.Variables.UserVariable("chip", chip, SmartFoxSDK.SmartFox.Entities.Variables.VariableType.DOUBLE);
        user._setVariable(uv);
    }
}
window.GameVariables = GameVariables;
