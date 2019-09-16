## RNのテンプレート201909版

* いちおう9月16日版

## インストールモジュール

```
expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
npm install --save react-navigation-stack react-navigation-tabs react-navigation-drawer
npm install --save react-native-elements
npm install --save react-native-vector-icons
npm install --save redux react-redux
npm install --save redux-thunk
```

## Tag

* v1-1 : モジュールとHome.jsを設定したところ。
* v1-2 : Profile.jsを追加し、StackNavigtorを設定。


## 使い方

Tag（ブランチ）を指定してclone。

>いまのところv1-2がおすすめ。

```
git clone https://github.com/eizaburo/rn_temp_201909.git -b v1-2
cd rn_temp_201909
npm install
expo start
```

cloneしたときno branchなので、

```
git checkout master
```

しとく。