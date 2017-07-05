//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import { Thrift } from 'thrift';
import * as Int64 from 'node-int64';

declare module './mapd_types' {

  enum TDatumType {
    SMALLINT = 0,
    INT = 1,
    BIGINT = 2,
    FLOAT = 3,
    DECIMAL = 4,
    DOUBLE = 5,
    STR = 6,
    TIME = 7,
    TIMESTAMP = 8,
    DATE = 9,
    BOOL = 10,
    INTERVAL_DAY_TIME = 11,
    INTERVAL_YEAR_MONTH = 12,
  }

  enum TEncodingType {
    NONE = 0,
    FIXED = 1,
    RL = 2,
    DIFF = 3,
    DICT = 4,
    SPARSE = 5,
  }

  enum TExecuteMode {
    HYBRID = 0,
    GPU = 1,
    CPU = 2,
  }

  enum TDeviceType {
    CPU = 0,
    GPU = 1,
  }

  enum TTableType {
    DELIMITED = 0,
    POLYGON = 1,
  }

  enum TMergeType {
    UNION = 0,
    REDUCE = 1,
  }

  enum TExpressionRangeType {
    INVALID = 0,
    INTEGER = 1,
    FLOAT = 2,
    DOUBLE = 3,
  }

  class TDatumVal {
    int_val: number;
    real_val: number;
    str_val: string;
    arr_val: TDatum[];

    constructor(args?: { int_val: number; real_val: number; str_val: string; arr_val: TDatum[]; });
  }

  class TDatum {
    val: TDatumVal;
    is_null: boolean;

    constructor(args?: { val: TDatumVal; is_null: boolean; });
  }

  class TStringValue {
    str_val: string;
    is_null: boolean;

    constructor(args?: { str_val: string; is_null: boolean; });
  }

  class TTypeInfo {
    type: TDatumType;
    encoding: TEncodingType;
    nullable: boolean;
    is_array: boolean;
    precision: number;
    scale: number;
    comp_param: number;

    constructor(args?: { type: TDatumType; encoding: TEncodingType; nullable: boolean; is_array: boolean; precision: number; scale: number; comp_param: number; });
  }

  class TColumnType {
    col_name: string;
    col_type: TTypeInfo;
    is_reserved_keyword: boolean;
    src_name: string;

    constructor(args?: { col_name: string; col_type: TTypeInfo; is_reserved_keyword: boolean; src_name: string; });
  }

  class TRow {
    cols: TDatum[];

    constructor(args?: { cols: TDatum[]; });
  }

  class TColumnData {
    int_col: number[];
    real_col: number[];
    str_col: string[];
    arr_col: TColumn[];

    constructor(args?: { int_col: number[]; real_col: number[]; str_col: string[]; arr_col: TColumn[]; });
  }

  class TColumn {
    data: TColumnData;
    nulls: boolean[];

    constructor(args?: { data: TColumnData; nulls: boolean[]; });
  }

  class TStringRow {
    cols: TStringValue[];

    constructor(args?: { cols: TStringValue[]; });
  }

  class TStepResult {
    serialized_rows: string;
    execution_finished: boolean;
    merge_type: TMergeType;
    sharded: boolean;
    row_desc: TColumnType[];
    node_id: number;

    constructor(args?: { serialized_rows: string; execution_finished: boolean; merge_type: TMergeType; sharded: boolean; row_desc: TColumnType[]; node_id: number; });
  }

  class TRowSet {
    row_desc: TColumnType[];
    rows: TRow[];
    columns: TColumn[];
    is_columnar: boolean;

    constructor(args?: { row_desc: TColumnType[]; rows: TRow[]; columns: TColumn[]; is_columnar: boolean; });
  }

  class TQueryResult {
    row_set: TRowSet;
    execution_time_ms: number;
    total_time_ms: number;
    nonce: string;

    constructor(args?: { row_set: TRowSet; execution_time_ms: number; total_time_ms: number; nonce: string; });
  }

  class TDataFrame {
    sm_handle: string;
    sm_size: number;
    df_handle: string;
    df_size: number;

    constructor(args?: { sm_handle: string; sm_size: number; df_handle: string; df_size: number; });
  }

  class TDBInfo {
    db_name: string;
    db_owner: string;

    constructor(args?: { db_name: string; db_owner: string; });
  }

  class TMapDException extends Thrift.TException {
    error_msg: string;

    constructor(args?: { error_msg: string; });
  }

  class TRenderProperty {
    property_type: TDatumType;
    property_value: TDatumVal;

    constructor(args?: { property_type: TDatumType; property_value: TDatumVal; });
  }

  class TCopyParams {
    delimiter: string;
    null_str: string;
    has_header: boolean;
    quoted: boolean;
    quote: string;
    escape: string;
    line_delim: string;
    array_delim: string;
    array_begin: string;
    array_end: string;
    threads: number;
    table_type: TTableType;

    constructor(args?: { delimiter: string; null_str: string; has_header: boolean; quoted: boolean; quote: string; escape: string; line_delim: string; array_delim: string; array_begin: string; array_end: string; threads: number; table_type: TTableType; });
  }

  class TDetectResult {
    row_set: TRowSet;
    copy_params: TCopyParams;

    constructor(args?: { row_set: TRowSet; copy_params: TCopyParams; });
  }

  class TImportStatus {
    elapsed: number;
    rows_completed: number;
    rows_estimated: number;
    rows_rejected: number;

    constructor(args?: { elapsed: number; rows_completed: number; rows_estimated: number; rows_rejected: number; });
  }

  class TFrontendView {
    view_name: string;
    view_state: string;
    image_hash: string;
    update_time: string;
    view_metadata: string;

    constructor(args?: { view_name: string; view_state: string; image_hash: string; update_time: string; view_metadata: string; });
  }

  class TServerStatus {
    read_only: boolean;
    version: string;
    rendering_enabled: boolean;
    start_time: number;
    edition: string;

    constructor(args?: { read_only: boolean; version: string; rendering_enabled: boolean; start_time: number; edition: string; });
  }

  class TPixel {
    x: number;
    y: number;

    constructor(args?: { x: number; y: number; });
  }

  class TPixelRowResult {
    pixel: TPixel;
    row_id: number;
    row_set: TRowSet;
    nonce: string;

    constructor(args?: { pixel: TPixel; row_id: number; row_set: TRowSet; nonce: string; });
  }

  class TPixelTableRowResult {
    pixel: TPixel;
    vega_table_name: string;
    table_id: number;
    row_id: number;
    row_set: TRowSet;
    nonce: string;

    constructor(args?: { pixel: TPixel; vega_table_name: string; table_id: number; row_id: number; row_set: TRowSet; nonce: string; });
  }

  class TPixelRows {
    pixel: TPixel;
    row_set: TRowSet;

    constructor(args?: { pixel: TPixel; row_set: TRowSet; });
  }

  class TPixelResult {
    pixel_rows: TPixelRows[];
    nonce: string;

    constructor(args?: { pixel_rows: TPixelRows[]; nonce: string; });
  }

  class TRenderResult {
    image: string;
    nonce: string;
    execution_time_ms: number;
    render_time_ms: number;
    total_time_ms: number;

    constructor(args?: { image: string; nonce: string; execution_time_ms: number; render_time_ms: number; total_time_ms: number; });
  }

  class TGpuMemorySummary {
    max: number;
    in_use: number;
    allocated: number;
    is_allocation_capped: boolean;

    constructor(args?: { max: number; in_use: number; allocated: number; is_allocation_capped: boolean; });
  }

  class TMemorySummary {
    cpu_memory_in_use: number;
    gpu_summary: TGpuMemorySummary[];

    constructor(args?: { cpu_memory_in_use: number; gpu_summary: TGpuMemorySummary[]; });
  }

  class TTableDetails {
    row_desc: TColumnType[];
    fragment_size: number;
    page_size: number;
    max_rows: number;
    view_sql: string;

    constructor(args?: { row_desc: TColumnType[]; fragment_size: number; page_size: number; max_rows: number; view_sql: string; });
  }

  class TColumnRange {
    type: TExpressionRangeType;
    col_id: number;
    table_id: number;
    has_nulls: boolean;
    int_min: number;
    int_max: number;
    bucket: number;
    fp_min: number;
    fp_max: number;

    constructor(args?: { type: TExpressionRangeType; col_id: number; table_id: number; has_nulls: boolean; int_min: number; int_max: number; bucket: number; fp_min: number; fp_max: number; });
  }

  class TDictionaryGeneration {
    dict_id: number;
    entry_count: number;

    constructor(args?: { dict_id: number; entry_count: number; });
  }

  class TTableGeneration {
    table_id: number;
    tuple_count: number;
    start_rowid: number;

    constructor(args?: { table_id: number; tuple_count: number; start_rowid: number; });
  }

  class TPendingQuery {
    id: number;
    column_ranges: TColumnRange[];
    dictionary_generations: TDictionaryGeneration[];
    table_generations: TTableGeneration[];

    constructor(args?: { id: number; column_ranges: TColumnRange[]; dictionary_generations: TDictionaryGeneration[]; table_generations: TTableGeneration[]; });
  }

  class TVarLen {
    payload: string;
    is_null: boolean;

    constructor(args?: { payload: string; is_null: boolean; });
  }

  class TDataBlockPtr {
    fixed_len_data: string;
    var_len_data: TVarLen[];

    constructor(args?: { fixed_len_data?: string; var_len_data?: TVarLen[]; });
  }

  class TInsertData {
    db_id: number;
    table_id: number;
    column_ids: number[];
    data: TDataBlockPtr[];
    num_rows: number;

    constructor(args?: { db_id: number; table_id: number; column_ids: number[]; data: TDataBlockPtr[]; num_rows: number; });
  }

  class TRawRenderPassDataResult {
    num_channels: number;
    pixels: string;
    row_ids_A: string;
    row_ids_B: string;
    table_ids: string;

    constructor(args?: { num_channels: number; pixels: string; row_ids_A: string; row_ids_B: string; table_ids: string; });
  }

  class TRawPixelDataResult {
    width: number;
    height: number;
    render_pass_map: { [k: number]: TRawRenderPassDataResult; };
    execution_time_ms: number;
    render_time_ms: number;
    total_time_ms: number;

    constructor(args?: { width: number; height: number; render_pass_map: { [k: number]: TRawRenderPassDataResult; }; execution_time_ms: number; render_time_ms: number; total_time_ms: number; });
  }
}