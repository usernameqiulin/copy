export default{
  "data": {
    "abilityDsl": {
      "events": [
        {
          "required": true,
          "type": "info",
          "name": "post",
          "desc": "属性上报",
          "method": "thing.event.property.post",
          "identifier": "post",
          "outputData": [
            {
              "name": "主灯开关",
              "dataType": {
                "type": "bool",
                "specs": {
                  "0": "关闭",
                  "1": "开启"
                }
              },
              "identifier": "LightSwitch"
            },
            {
              "name": "频段",
              "dataType": {
                "type": "text",
                "specs": {
                  "length": "255"
                }
              },
              "identifier": "WIFI_Band"
            },
            {
              "name": "信道",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "255",
                  "unitName": "无",
                  "min": "1"
                }
              },
              "identifier": "WIFI_Channel"
            },
            {
              "name": "信号强度",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "-1",
                  "unitName": "无",
                  "min": "-127"
                }
              },
              "identifier": "WiFI_RSSI"
            },
            {
              "name": "信噪比",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "127",
                  "unitName": "无",
                  "min": "-127"
                }
              },
              "identifier": "WiFI_SNR"
            },
            {
              "name": "热点BSSID",
              "dataType": {
                "type": "text",
                "specs": {
                  "length": "255"
                }
              },
              "identifier": "WIFI_AP_BSSID"
            },
            {
              "name": "接收速率",
              "dataType": {
                "type": "double",
                "specs": {
                  "max": "99999",
                  "unitName": "无",
                  "min": "0"
                }
              },
              "identifier": "WIFI_Tx_Rate"
            },
            {
              "name": "发送速率",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "99999",
                  "unitName": "无",
                  "min": "0"
                }
              },
              "identifier": "WIFI_Rx_Rate"
            },
            {
              "name": "场景JSON对象",
              "dataType": {
                "type": "struct",
                "specs": [
                  {
                    "name": "自定义开关",
                    "dataType": {
                      "type": "bool",
                      "specs": {
                        "0": "关",
                        "1": "开"
                      }
                    },
                    "identifier": "deviceswitch"
                  },
                  {
                    "name": "自定义滑动",
                    "dataType": {
                      "type": "int",
                      "specs": {
                        "max": "50",
                        "unitName": "米",
                        "min": "1",
                        "unit": "m"
                      }
                    },
                    "identifier": "deviceslide"
                  }
                ]
              },
              "identifier": "plubinJson"
            }
          ]
        },
        {
          "required": true,
          "type": "error",
          "name": "故障上报",
          "method": "thing.event.Error.post",
          "identifier": "Error",
          "outputData": [
            {
              "name": "故障代码",
              "dataType": {
                "type": "enum",
                "specs": {
                  "0": "正常"
                }
              },
              "identifier": "ErrorCode"
            }
          ]
        }
      ],
      "services": [
        {
          "required": true,
          "callType": "sync",
          "name": "set",
          "desc": "属性设置",
          "method": "thing.service.property.set",
          "inputData": [
            {
              "name": "主灯开关",
              "dataType": {
                "type": "bool",
                "specs": {
                  "0": "关闭",
                  "1": "开启"
                }
              },
              "identifier": "LightSwitch"
            },
            {
              "name": "频段",
              "dataType": {
                "type": "text",
                "specs": {
                  "length": "255"
                }
              },
              "identifier": "WIFI_Band"
            },
            {
              "name": "信道",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "255",
                  "unitName": "无",
                  "min": "1"
                }
              },
              "identifier": "WIFI_Channel"
            },
            {
              "name": "信号强度",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "-1",
                  "unitName": "无",
                  "min": "-127"
                }
              },
              "identifier": "WiFI_RSSI"
            },
            {
              "name": "信噪比",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "127",
                  "unitName": "无",
                  "min": "-127"
                }
              },
              "identifier": "WiFI_SNR"
            },
            {
              "name": "热点BSSID",
              "dataType": {
                "type": "text",
                "specs": {
                  "length": "255"
                }
              },
              "identifier": "WIFI_AP_BSSID"
            },
            {
              "name": "接收速率",
              "dataType": {
                "type": "double",
                "specs": {
                  "max": "99999",
                  "unitName": "无",
                  "min": "0"
                }
              },
              "identifier": "WIFI_Tx_Rate"
            },
            {
              "name": "发送速率",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "99999",
                  "unitName": "无",
                  "min": "0"
                }
              },
              "identifier": "WIFI_Rx_Rate"
            },
            {
              "name": "场景JSON对象",
              "dataType": {
                "type": "struct",
                "specs": [
                  {
                    "name": "自定义开关",
                    "dataType": {
                      "type": "bool",
                      "specs": {
                        "0": "关",
                        "1": "开"
                      }
                    },
                    "identifier": "deviceswitch"
                  },
                  {
                    "name": "自定义滑动",
                    "dataType": {
                      "type": "int",
                      "specs": {
                        "max": "50",
                        "unitName": "米",
                        "min": "1",
                        "unit": "m"
                      }
                    },
                    "identifier": "deviceslide"
                  }
                ]
              },
              "identifier": "plubinJson"
            }
          ],
          "identifier": "set",
          "outputData": []
        },
        {
          "required": true,
          "callType": "sync",
          "name": "get",
          "desc": "属性获取",
          "method": "thing.service.property.get",
          "inputData": [
            "LightSwitch",
            "WIFI_Band",
            "WIFI_Channel",
            "WiFI_RSSI",
            "WiFI_SNR",
            "WIFI_AP_BSSID",
            "WIFI_Tx_Rate",
            "WIFI_Rx_Rate",
            "plubinJson"
          ],
          "identifier": "get",
          "outputData": [
            {
              "name": "主灯开关",
              "dataType": {
                "type": "bool",
                "specs": {
                  "0": "关闭",
                  "1": "开启"
                }
              },
              "identifier": "LightSwitch"
            },
            {
              "name": "频段",
              "dataType": {
                "type": "text",
                "specs": {
                  "length": "255"
                }
              },
              "identifier": "WIFI_Band"
            },
            {
              "name": "信道",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "255",
                  "unitName": "无",
                  "min": "1"
                }
              },
              "identifier": "WIFI_Channel"
            },
            {
              "name": "信号强度",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "-1",
                  "unitName": "无",
                  "min": "-127"
                }
              },
              "identifier": "WiFI_RSSI"
            },
            {
              "name": "信噪比",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "127",
                  "unitName": "无",
                  "min": "-127"
                }
              },
              "identifier": "WiFI_SNR"
            },
            {
              "name": "热点BSSID",
              "dataType": {
                "type": "text",
                "specs": {
                  "length": "255"
                }
              },
              "identifier": "WIFI_AP_BSSID"
            },
            {
              "name": "接收速率",
              "dataType": {
                "type": "double",
                "specs": {
                  "max": "99999",
                  "unitName": "无",
                  "min": "0"
                }
              },
              "identifier": "WIFI_Tx_Rate"
            },
            {
              "name": "发送速率",
              "dataType": {
                "type": "int",
                "specs": {
                  "max": "99999",
                  "unitName": "无",
                  "min": "0"
                }
              },
              "identifier": "WIFI_Rx_Rate"
            },
            {
              "name": "场景JSON对象",
              "dataType": {
                "type": "struct",
                "specs": [
                  {
                    "name": "自定义开关",
                    "dataType": {
                      "type": "bool",
                      "specs": {
                        "0": "关",
                        "1": "开"
                      }
                    },
                    "identifier": "deviceswitch"
                  },
                  {
                    "name": "自定义滑动",
                    "dataType": {
                      "type": "int",
                      "specs": {
                        "max": "50",
                        "unitName": "米",
                        "min": "1",
                        "unit": "m"
                      }
                    },
                    "identifier": "deviceslide"
                  }
                ]
              },
              "identifier": "plubinJson"
            }
          ]
        },
        {
          "required": false,
          "callType": "sync",
          "name": "自定义场景服务",
          "desc": "这是全屋场景测试用",
          "method": "thing.service.testservice",
          "inputData": [
            {
              "name": "主灯开关",
              "dataType": {
                "type": "bool",
                "specs": {
                  "0": "关闭",
                  "1": "开启"
                }
              },
              "identifier": "LightSwitch"
            },
            {
              "name": "接收速率",
              "dataType": {
                "type": "double",
                "specs": {
                  "max": "100",
                  "unitName": "百万分率",
                  "min": "0",
                  "unit": "ppm"
                }
              },
              "identifier": "WIFI_Tx_Rate"
            }
          ],
          "identifier": "testservice",
          "outputData": [
            {
              "name": "主灯开关",
              "dataType": {
                "type": "bool",
                "specs": {
                  "0": "关闭",
                  "1": "开启"
                }
              },
              "identifier": "LightSwitch"
            },
            {
              "name": "接收速率",
              "dataType": {
                "type": "double",
                "specs": {
                  "max": "100",
                  "unitName": "百万分率",
                  "min": "0",
                  "unit": "ppm"
                }
              },
              "identifier": "WIFI_Tx_Rate"
            }
          ]
        }
      ],
      "properties": [
        {
          "required": true,
          "accessMode": "rw",
          "name": "主灯开关",
          "dataType": {
            "type": "bool",
            "specs": {
              "0": "关闭",
              "1": "开启"
            }
          },
          "identifier": "LightSwitch"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "频段",
          "dataType": {
            "type": "text",
            "specs": {
              "length": "255"
            }
          },
          "identifier": "WIFI_Band"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "信道",
          "dataType": {
            "type": "int",
            "specs": {
              "max": "255",
              "unitName": "无",
              "min": "1"
            }
          },
          "identifier": "WIFI_Channel"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "信号强度",
          "dataType": {
            "type": "int",
            "specs": {
              "max": "-1",
              "unitName": "无",
              "min": "-127"
            }
          },
          "identifier": "WiFI_RSSI"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "信噪比",
          "dataType": {
            "type": "int",
            "specs": {
              "max": "127",
              "unitName": "无",
              "min": "-127"
            }
          },
          "identifier": "WiFI_SNR"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "热点BSSID",
          "dataType": {
            "type": "text",
            "specs": {
              "length": "255"
            }
          },
          "identifier": "WIFI_AP_BSSID"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "接收速率",
          "dataType": {
            "type": "double",
            "specs": {
              "max": "99999",
              "unitName": "无",
              "min": "0"
            }
          },
          "identifier": "WIFI_Tx_Rate"
        },
        {
          "required": true,
          "accessMode": "rw",
          "name": "发送速率",
          "dataType": {
            "type": "int",
            "specs": {
              "max": "99999",
              "unitName": "无",
              "min": "0"
            }
          },
          "identifier": "WIFI_Rx_Rate"
        },
        {
          "required": false,
          "accessMode": "rw",
          "name": "场景JSON对象",
          "dataType": {
            "type": "struct",
            "specs": [
              {
                "name": "自定义开关",
                "dataType": {
                  "type": "bool",
                  "specs": {
                    "0": "关",
                    "1": "开"
                  }
                },
                "identifier": "deviceswitch"
              },
              {
                "name": "自定义滑动",
                "dataType": {
                  "type": "int",
                  "specs": {
                    "max": "50",
                    "unitName": "米",
                    "min": "1",
                    "unit": "m"
                  }
                },
                "identifier": "deviceslide"
              }
            ]
          },
          "identifier": "plubinJson"
        }
      ],
      "profile": {
        "productKey": "a1VfUF4QCXP"
      },
      "schema": "https://iot-tsl.oss-cn-shanghai.aliyuncs.com/schema.json"
    },
    "simplifyAbilityDTOs": [
      {
        "type": 1,
        "name": "主灯开关",
        "identifier": "LightSwitch",
        "categoryType": "Light"
      },
      {
        "type": 1,
        "name": "信道",
        "identifier": "WIFI_Channel",
        "categoryType": "Light"
      },
      {
        "type": 1,
        "name": "信号强度",
        "identifier": "WiFI_RSSI",
        "categoryType": "Light"
      },
      {
        "type": 1,
        "name": "信噪比",
        "identifier": "WiFI_SNR",
        "categoryType": "Light"
      },
      {
        "type": 1,
        "name": "接收速率",
        "identifier": "WIFI_Tx_Rate",
        "categoryType": "Light"
      },
      {
        "type": 1,
        "name": "发送速率",
        "identifier": "WIFI_Rx_Rate",
        "categoryType": "Light"
      },
      {
        "type": 2,
        "name": "自定义场景服务",
        "identifier": "testservice",
        "categoryType": "Light"
      }
    ]
  },
  "code": "200"
}