// import { createSlice } from "@reduxjs/toolkit";
// import dataSource from "../data";

// export const codeSlice = createSlice({
//   name: "code",
//   initialState: [...dataSource],
//   // data: {
//   //   type: "Layout",
//   //   id: "Layout-xxxx",
//   //   props: {
//   //     style: {
//   //       background: "#f0f5fc",
//   //     },
//   //   },
//   //   children: [
//   //     {
//   //       type: "Layout",
//   //       id: "Layout-xxxx",
//   //       media: {
//   //         xs: "480px",
//   //         sm: "576px",
//   //         md: "768px",
//   //         lg: "992px",
//   //         xl: "1200px",
//   //         xxl: "1600px",
//   //       },
//   //       props: {
//   //         style: {
//   //           padding: "48px 24px",
//   //           margin: "0 auto",
//   //         },
//   //       },
//   //       children: [
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             style: {},
//   //           },
//   //           children: [
//   //             {
//   //               type: "Typography.Title",
//   //               id: "Comp-xxxx",
//   //               content: "Monthly Diagnostic Report",
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             justify: "end",
//   //             align: "middle",
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Typography.Text",
//   //               id: "Comp-xxxx",
//   //               content: "Last updated: 2022-02-22 02:22",
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             gutter: 16,
//   //             justify: "space-between",
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 6,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     style: {
//   //                       textAlign: "left",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Space",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         direction: "vertical",
//   //                       },
//   //                       children: [
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Customers",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "1203,4922",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Compared to last month",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "+2.39%",
//   //                         },
//   //                       ],
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 6,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     style: {
//   //                       textAlign: "left",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Space",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         direction: "vertical",
//   //                       },
//   //                       children: [
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Customers",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "1203,4922",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Compared to last month",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "+2.39%",
//   //                         },
//   //                       ],
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 6,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     style: {
//   //                       textAlign: "left",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Space",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         direction: "vertical",
//   //                       },
//   //                       children: [
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Customers",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "1203,4922",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Compared to last month",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "+2.39%",
//   //                         },
//   //                       ],
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 6,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     style: {
//   //                       textAlign: "left",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Space",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         direction: "vertical",
//   //                       },
//   //                       children: [
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Customers",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "1203,4922",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Compared to last month",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "+2.39%",
//   //                         },
//   //                       ],
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Typography.Title",
//   //               id: "Comp-xxxx",
//   //               content: "Member Analysis",
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 24,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   isDownload: true,
//   //                   props: {
//   //                     title: "Customer Segment",
//   //                     style: {
//   //                       textAlign: "left",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Table",
//   //                       id: "Comp-xxxx",
//   //                       checkbox: true,
//   //                       props: {
//   //                         pagination: false,
//   //                         columns: [
//   //                           {
//   //                             title: "Customer Segment",
//   //                             dataIndex: "name",
//   //                             key: "name",
//   //                             render: {
//   //                               id: "Comp-xxxx",
//   //                               type: "Row",
//   //                               children: [
//   //                                 {
//   //                                   type: "Col",
//   //                                   props: {
//   //                                     span: 1,
//   //                                     style: {
//   //                                       paddingTop: "8px",
//   //                                     },
//   //                                   },
//   //                                   children: [
//   //                                     {
//   //                                       type: "StatusLabel",
//   //                                     },
//   //                                   ],
//   //                                 },
//   //                                 {
//   //                                   type: "Col",
//   //                                   props: {
//   //                                     span: 25,
//   //                                   },
//   //                                   children: [
//   //                                     {
//   //                                       type: "Row",
//   //                                       props: {
//   //                                         justify: "middle",
//   //                                         align: "middle",
//   //                                       },
//   //                                       children: [
//   //                                         {
//   //                                           type: "Typography.Text",
//   //                                           id: "Comp-xxxx",
//   //                                           content: ({ tag }) => `${tag}`,
//   //                                         },
//   //                                       ],
//   //                                     },
//   //                                     {
//   //                                       type: "Typography.Text",
//   //                                       id: "Comp-xxxx",
//   //                                       content: ({ description }) =>
//   //                                         `${description}`,
//   //                                     },
//   //                                   ],
//   //                                 },
//   //                               ],
//   //                             },
//   //                           },
//   //                           {
//   //                             title: "Customers",
//   //                             dataIndex: "customers",
//   //                             key: "customers",
//   //                           },
//   //                           {
//   //                             title: "Orders",
//   //                             dataIndex: "orders",
//   //                             key: "orders",
//   //                           },
//   //                           {
//   //                             title: "AOV",
//   //                             dataIndex: "aov",
//   //                             key: "aov",
//   //                           },
//   //                           {
//   //                             title: "Revenue",
//   //                             dataIndex: "revenue",
//   //                             key: "revenue",
//   //                           },
//   //                         ],
//   //                         dataSource: [
//   //                           {
//   //                             key: "1",
//   //                             name: "John Brown",
//   //                             age: 32,
//   //                             address: "New York",
//   //                             tag: "New",
//   //                             description:
//   //                               "Made first purchase within past month",
//   //                             customers: `1,304`,
//   //                             orders: 120,
//   //                             aov: `$120,103`,
//   //                             revenue: `$49`,
//   //                           },
//   //                           {
//   //                             key: "2",
//   //                             name: "Lebron James",
//   //                             age: 32,
//   //                             address: "Japan",
//   //                             tag: "Active",
//   //                             description:
//   //                               "Made 2+ purchases within past month",
//   //                             customers: `1,304`,
//   //                             orders: 120,
//   //                             aov: `$120,103`,
//   //                             revenue: `$49`,
//   //                           },
//   //                           {
//   //                             key: "3",
//   //                             name: "James Brown",
//   //                             age: 32,
//   //                             address: "Tapei",
//   //                             tag: "Sleepers",
//   //                             description:
//   //                               "Have not made any purchases within past 60 days",
//   //                             customers: `1,304`,
//   //                             orders: 120,
//   //                             aov: `$120,103`,
//   //                             revenue: `$49`,
//   //                           },
//   //                         ],
//   //                       },
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             gutter: 16,
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 12,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     title: "Member Analysis",
//   //                     style: {
//   //                       textAlign: "left",
//   //                       height: "100%",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Pie",
//   //                       id: "Comp-zzzz",
//   //                       props: {
//   //                         appendPadding: 10,
//   //                         data: [
//   //                           {
//   //                             type: "分类一",
//   //                             value: 27,
//   //                           },
//   //                           {
//   //                             type: "分类二",
//   //                             value: 25,
//   //                           },
//   //                           {
//   //                             type: "分类三",
//   //                             value: 18,
//   //                           },
//   //                           {
//   //                             type: "分类四",
//   //                             value: 15,
//   //                           },
//   //                           {
//   //                             type: "分类五",
//   //                             value: 10,
//   //                           },
//   //                           {
//   //                             type: "其他",
//   //                             value: 5,
//   //                           },
//   //                         ],
//   //                         angleField: "value",
//   //                         colorField: "type",
//   //                         radius: 0.8,
//   //                         innerRadius: 0.64,
//   //                         label: {
//   //                           type: "inner",
//   //                           offset: "-50%",
//   //                           content: ({ percent }) =>
//   //                             `${(percent * 100).toFixed(0)}%`,
//   //                           style: {
//   //                             fill: "#fff",
//   //                             fontSize: 14,
//   //                             textAlign: "center",
//   //                           },
//   //                         },
//   //                         statistic: null,
//   //                       },
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 12,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     title: "AI Forecasts",
//   //                     style: {
//   //                       textAlign: "left",
//   //                       height: "100%",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Space",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         direction: "vertical",
//   //                       },
//   //                       children: [
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "🔮 In the next 30 days, we predict…",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Loyalty Gain",
//   //                         },
//   //                         {
//   //                           type: "div",
//   //                           id: "Comp-xxxx",
//   //                           children: [
//   //                             {
//   //                               type: "Typography.Text",
//   //                               id: "Comp-xxxx",
//   //                               variable: {
//   //                                 client: 40,
//   //                                 revenue: `2,338`,
//   //                               },
//   //                               content: ({ client, revenue }) =>
//   //                                 `An increase in ${client} clients becoming Loyal customers, with an estimated revenue gain of $${revenue} (`,
//   //                             },
//   //                             {
//   //                               type: "Typography.Text",
//   //                               id: "Comp-xxxx",
//   //                               content: "🔒 download list",
//   //                             },
//   //                             {
//   //                               type: "Typography.Text",
//   //                               id: "Comp-xxxx",
//   //                               content:
//   //                                 " to run targetted marketing campaigns to increase revenue gain!)",
//   //                             },
//   //                           ],
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Sleeper Alert",
//   //                         },
//   //                         {
//   //                           type: "div",
//   //                           id: "Comp-xxxx",
//   //                           children: [
//   //                             {
//   //                               type: "Typography.Text",
//   //                               id: "Comp-xxxx",
//   //                               variable: {
//   //                                 client: 430,
//   //                                 revenue: `234,338`,
//   //                               },
//   //                               content: ({ client, revenue }) =>
//   //                                 `An increase in ${client} clients becoming Sleepers, with an estimated revenue loss of $${revenue} (`,
//   //                             },
//   //                             {
//   //                               type: "Typography.Text",
//   //                               id: "Comp-xxxx",
//   //                               content: "🔒 download list",
//   //                             },
//   //                             {
//   //                               type: "Typography.Text",
//   //                               id: "Comp-xxxx",
//   //                               content: " to prevent further losses!)",
//   //                             },
//   //                           ],
//   //                         },
//   //                       ],
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Typography.Title",
//   //               id: "Comp-xxxx",
//   //               content: "Product Analysis",
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           type: "Row",
//   //           id: "Row-title",
//   //           props: {
//   //             gutter: 16,
//   //             style: {
//   //               paddingBottom: "24px",
//   //             },
//   //           },
//   //           children: [
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 12,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     title: "Product Ranking",
//   //                     style: {
//   //                       textAlign: "left",
//   //                       height: "100%",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Table",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         pagination: true,
//   //                         columns: [
//   //                           {
//   //                             title: "Customers",
//   //                             dataIndex: "customers",
//   //                             key: "customers",
//   //                           },
//   //                           {
//   //                             title: "Orders",
//   //                             dataIndex: "orders",
//   //                             key: "orders",
//   //                           },
//   //                           {
//   //                             title: "AOV",
//   //                             dataIndex: "aov",
//   //                             key: "aov",
//   //                           },
//   //                           {
//   //                             title: "Revenue",
//   //                             dataIndex: "revenue",
//   //                             key: "revenue",
//   //                           },
//   //                         ],
//   //                         dataSource: [
//   //                           {
//   //                             key: "1",
//   //                             name: "John Brown",
//   //                             age: 32,
//   //                             address: "New York",
//   //                             tag: "New",
//   //                             description:
//   //                               "Made first purchase within past month",
//   //                             customers: `1,304`,
//   //                             orders: 120,
//   //                             aov: `$120,103`,
//   //                             revenue: `$49`,
//   //                           },
//   //                           {
//   //                             key: "2",
//   //                             name: "Lebron James",
//   //                             age: 32,
//   //                             address: "Japan",
//   //                             tag: "Active",
//   //                             description:
//   //                               "Made 2+ purchases within past month",
//   //                             customers: `1,304`,
//   //                             orders: 120,
//   //                             aov: `$120,103`,
//   //                             revenue: `$49`,
//   //                           },
//   //                           {
//   //                             key: "3",
//   //                             name: "James Brown",
//   //                             age: 32,
//   //                             address: "Tapei",
//   //                             tag: "Sleepers",
//   //                             description:
//   //                               "Have not made any purchases within past 60 days",
//   //                             customers: `1,304`,
//   //                             orders: 120,
//   //                             aov: `$120,103`,
//   //                             revenue: `$49`,
//   //                           },
//   //                         ],
//   //                       },
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //             {
//   //               type: "Col",
//   //               props: {
//   //                 span: 12,
//   //               },
//   //               children: [
//   //                 {
//   //                   type: "Card",
//   //                   id: "Comp-xxxx",
//   //                   props: {
//   //                     title: "Product Insights",
//   //                     style: {
//   //                       height: "100%",
//   //                       textAlign: "left",
//   //                     },
//   //                     bordered: "false",
//   //                   },
//   //                   children: [
//   //                     {
//   //                       type: "Space",
//   //                       id: "Comp-xxxx",
//   //                       props: {
//   //                         direction: "vertical",
//   //                       },
//   //                       children: [
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content:
//   //                             "I am some text that explains the chart below",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Catgeory 1: I am some description",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Catgeory 2: I am some description",
//   //                         },
//   //                         {
//   //                           type: "Typography.Text",
//   //                           id: "Comp-xxxx",
//   //                           content: "Catgeory 3: I am some description",
//   //                         },
//   //                       ],
//   //                     },
//   //                   ],
//   //                 },
//   //               ],
//   //             },
//   //           ],
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },
//   reducers: {
//     update: (state, action) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.data = action.payload;
//     },
//   },
// });

// export const { update } = codeSlice.actions;

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const updateAsync =
//   (data: any) => (dispatch: (arg0: { payload: any; type: string }) => void) => {
//     dispatch(update(data));
//   };

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state: { code: { data: any } }) => state.code.data;

// export default codeSlice.reducer;
