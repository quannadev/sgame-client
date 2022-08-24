//
//  BaseFlutterViewController.h
//  SGame68
//
//  Created by toandk on 11/08/2022.
//

#ifndef BaseFlutterViewController_h
#define BaseFlutterViewController_h

#import <Flutter/Flutter.h>

@interface BaseFlutterViewController : FlutterViewController {
    FlutterMethodChannel* channel;
}

- (instancetype)initWithEntryPoint:(NSString *)entryPoint;

@end

#endif /* BaseFlutterViewController_h */
