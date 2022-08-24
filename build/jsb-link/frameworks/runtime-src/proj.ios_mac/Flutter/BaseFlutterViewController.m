//
//  BaseFlutterViewController.m
//  SGame68-mobile
//
//  Created by toandk on 11/08/2022.
//

#import <Foundation/Foundation.h>
#import "BaseFlutterViewController.h"
#import <FlutterPluginRegistrant/GeneratedPluginRegistrant.h>
#import "RootViewController.h"

static FlutterEngineGroup *flutterEngines;

@interface BaseFlutterViewController ()

@end

@implementation BaseFlutterViewController

- (instancetype)initWithEntryPoint:(NSString *)entryPoint {
    if (flutterEngines == NULL) {
        flutterEngines = [[FlutterEngineGroup alloc] initWithName: @"sgame" project: nil];
    }
    FlutterEngine *engine = [flutterEngines makeEngineWithEntrypoint: entryPoint libraryURI:NULL];
    [GeneratedPluginRegistrant registerWithRegistry: engine];
    channel = [FlutterMethodChannel methodChannelWithName:@"sgame" binaryMessenger:engine.binaryMessenger];
    self = [super initWithEngine:engine nibName:nil bundle:nil];
    return self;
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
}

- (void) viewDidLoad {
    [super viewDidLoad];
    
    [self handleFlutterCall];
}

- (void)handleFlutterCall {
    [channel setMethodCallHandler:^(FlutterMethodCall * _Nonnull call, FlutterResult  _Nonnull result) {
        if ([call.method isEqualToString: @"openSGame"]) {
            [self openSGame];
        }
    }];
}

- (void)openSGame {
    RootViewController *_viewController = [[RootViewController alloc]init];
    _viewController.automaticallyAdjustsScrollViewInsets = NO;
    _viewController.extendedLayoutIncludesOpaqueBars = NO;
    _viewController.edgesForExtendedLayout = UIRectEdgeAll;
    _viewController.wantsFullScreenLayout = YES;
    
    [self presentViewController: _viewController animated: true completion: NULL];
}

@end
